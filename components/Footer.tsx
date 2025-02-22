import Link from "next/link";

const footerLinks = [
  {
    title: "Popular Generators",
    links: [
      { label: "US Numbers", href: "https://random-phone-numbers.com/phone-number-generator/us" },
      { label: "UK Numbers", href: "https://random-phone-numbers.com/phone-number-generator/uk" },
      { label: "China Numbers", href: "https://random-phone-numbers.com/phone-number-generator/cn" },
      { label: "Ghana Numbers", href: "https://random-phone-numbers.com/phone-number-generator/gh" },
      { label: "India Numbers", href: "https://random-phone-numbers.com/phone-number-generator/in" },
      { label: "Philippines Numbers", href: "https://random-phone-numbers.com/phone-number-generator/ph" },
      { label: "Malaysia Numbers", href: "https://random-phone-numbers.com/phone-number-generator/my" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-200 pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Footer Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-base-content/70 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-base-300 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">📱</span>
              <span className="font-bold text-lg">Random Phone Numbers</span>
            </div>
            <div className="text-base-content/70 text-sm text-center">
              © {currentYear} Random Phone Numbers. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
