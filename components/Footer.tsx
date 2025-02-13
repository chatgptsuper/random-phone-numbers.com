import Link from 'next/link'

const footerLinks = [
  {
    title: 'Popular Generators',
    links: [
      { label: 'US Numbers', href: '/phone-number-generator/us' },
      { label: 'UK Numbers', href: '/phone-number-generator/uk' },
      { label: 'China Numbers', href: '/phone-number-generator/cn' },
      { label: 'India Numbers', href: '/phone-number-generator/in' },
      { label: 'Japan Numbers', href: '/phone-number-generator/jp' },
      { label: 'Singapore Numbers', href: '/phone-number-generator/sg' },
      { label: 'Malaysia Numbers', href: '/phone-number-generator/my' },
      { label: 'Philippines Numbers', href: '/phone-number-generator/ph' },
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Use', href: '/terms' },
      { label: 'Contact', href: '/contact' }
    ]
  }
]

export default function Footer() {
  const currentYear = new Date().getFullYear()
  
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
              <span className="font-bold text-lg">Phone Generator</span>
            </div>
            <div className="text-base-content/70 text-sm text-center">
              © {currentYear} Phone Number Generator. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 