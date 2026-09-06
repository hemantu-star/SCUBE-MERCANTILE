import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Business info / NAP */}
        <div>
          <h3 className="text-white font-semibold mb-3">S-Cube Mercantile</h3>
          <p className="text-sm leading-relaxed">
            C/o Suchii Group, 1st Floor, Nikita Pinacle, Opp. of Vivanta by
            Taj, Khanpara, Guwahati, Assam, India – 781022
          </p>
          <p className="text-sm mt-2">Info.scubemercantile@gmail.com</p>
          <p className="text-sm">+91-XXXXXXXXXX</p>
          <p className="text-sm mt-2">GSTN: 18EBPPS8578K4Z8</p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about-us" className="hover:text-white">About Us</Link></li>
            <li><Link href="/products" className="hover:text-white">Products</Link></li>
            <li><Link href="/solutions" className="hover:text-white">Solutions</Link></li>
            <li><Link href="/brands" className="hover:text-white">Brands</Link></li>
            <li><Link href="/gallery" className="hover:text-white">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Credentials */}
        <div>
          <h3 className="text-white font-semibold mb-3">Credentials</h3>
          <p className="text-sm">ISO 9001:2015 Certified Firm</p>
          <p className="text-sm mt-1">7+ Years of Trusted Service</p>
          <p className="text-sm mt-1">Serving Assam & the Northeast</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-8 pt-6 border-t border-blue-900 text-xs text-center text-gray-400">
        © {new Date().getFullYear()} S-Cube Mercantile. All rights reserved.
      </div>
    </footer>
  );
}