import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

let clientPromise: Promise<MongoClient> | null = null;

function initClient(): Promise<MongoClient> {
    const clientInstance = new MongoClient(uri!, options);
    return clientInstance
        .connect()
        .then((c) => {
            console.log("✅ [MongoDB] Connected successfully to MongoDB Atlas");
            return c;
        })
        .catch((err) => {
            console.error("❌ [MongoDB] Initial connection failed:", err.message);
            throw err;
        });
}

if (uri) {
    if (process.env.NODE_ENV === "development") {
        let globalWithMongo = global as typeof globalThis & {
            _mongoClientPromise?: Promise<MongoClient>;
        };

        if (!globalWithMongo._mongoClientPromise) {
            globalWithMongo._mongoClientPromise = initClient();
        }
        clientPromise = globalWithMongo._mongoClientPromise;
    } else {
        clientPromise = initClient();
    }
}

export default clientPromise;
