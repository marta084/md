import { Link } from "react-router";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  shop: [
    { name: "Stühle", href: "/kategorien/stuehle" },
    { name: "Tische", href: "/kategorien/tische" },
    { name: "Sessel", href: "/kategorien/sessel" },
    { name: "Schränke", href: "/kategorien/schraenke" },
    { name: "Akustik", href: "/kategorien/akustik" },
    { name: "Zubehör", href: "/kategorien/zubehoer" },
  ],
  company: [
    { name: "Über uns", href: "/ueber-uns" },
    { name: "Karriere", href: "/karriere" },
    { name: "Filialen", href: "/filialen" },
    { name: "Unser Blog", href: "/blog" },
  ],
  support: [
    { name: "Kontakt", href: "/kontakt" },
    { name: "FAQ", href: "/faq" },
    { name: "Versand", href: "/versand" },
    { name: "Retouren", href: "/retouren" },
    { name: "Garantie", href: "/garantie" },
  ],
  legal: [
    { name: "Impressum", href: "/impressum" },
    { name: "Datenschutz", href: "/datenschutz" },
    { name: "AGB", href: "/agb" },
    { name: "Cookie-Richtlinie", href: "/cookies" },
  ],
};

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
  { name: "Instagram", icon: Instagram, href: "https://instagram.com" },
  { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com" },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-bold text-white">Möbel Store</span>
            </Link>
            <p className="mt-4 text-sm text-gray-400 max-w-md">
              Ihr Premium-Möbelhaus für hochwertige Einrichtung. 
              Wir bieten Ihnen ausgewählte Designermöbel aus aller Welt.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-blue-500" />
                <span>+49 30 123456789</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-blue-500" />
                <a href="mailto:kontakt@moebelstore.de" className="hover:text-white">
                  kontakt@moebelstore.de
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-3 text-blue-500" />
                <span>Möbelstraße 123, 10115 Berlin</span>
              </div>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Shop</h3>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Unternehmen</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-white font-semibold mt-8 mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal and Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm hover:text-white">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-white font-semibold mt-8 mb-4">Social Media</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-400 hover:text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-sm text-gray-400 text-center">
            {new Date().getFullYear()} Möbel Store. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
