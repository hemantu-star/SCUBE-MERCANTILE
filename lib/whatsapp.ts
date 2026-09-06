import { company } from "@/lib/content";

const enquiry =
  "Hello, I would like to enquire about solar products from S-Cube Mercantile.";

export function whatsappUrl(message = enquiry) {
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;
}
