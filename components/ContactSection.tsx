import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-14">
      <h2 className="text-2xl md:text-3xl font-semibold text-center text-blue-900">
        Get in Touch
      </h2>
      <p className="text-center text-gray-600 mt-2 mb-10">
        Serving Guwahati, Assam and the wider Northeast
      </p>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Contact details */}
        <div className="space-y-5">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-blue-700 mt-1" />
            <p className="text-gray-700">
              C/o Suchii Group, 1st Floor, Nikita Pinacle, Opp. of Vivanta by
              Taj, Khanpara, Guwahati, Assam, India – 781022
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-blue-700" />
            <a href="tel:+91XXXXXXXXXX" className="text-gray-700 hover:text-blue-700">
              +91-XXXXXXXXXX
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-blue-700" />
            <a
              href="mailto:Info.scubemercantile@gmail.com"
              className="text-gray-700 hover:text-blue-700"
            >
              Info.scubemercantile@gmail.com
            </a>
          </div>
          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium mt-2"
          >
            WhatsApp Us
          </a>
        </div>

        {/* Embedded map */}
        <div className="rounded-xl overflow-hidden h-72 md:h-full min-h-[280px]">
          <iframe
            title="S-Cube Mercantile location on Google Maps"
            src="https://www.google.com/maps?q=Nikita+Pinacle+Khanpara+Guwahati&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}