'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  {
    label: 'Generators',
    children: [
      { href: '/us/phone-number-generator/us', label: 'United States', flag: '🇺🇸' },
      { href: '/us/phone-number-generator/uk', label: 'United Kingdom', flag: '🇬🇧' },
      { href: '/us/phone-number-generator/cn', label: 'China', flag: '🇨🇳' },
      { href: '/us/phone-number-generator/in', label: 'India', flag: '🇮🇳' },
      { href: '/us/phone-number-generator/jp', label: 'Japan', flag: '🇯🇵' },
      { href: '/us/phone-number-generator/sg', label: 'Singapore', flag: '🇸🇬' },
      { href: '/us/phone-number-generator/my', label: 'Malaysia', flag: '🇲🇾' },
      { href: '/us/phone-number-generator/ph', label: 'Philippines', flag: '🇵🇭' },
      { href: '/us/phone-number-generator/gh', label: 'Ghana', flag: '🇬🇭' },
      { href: '/us/phone-number-generator/ng', label: 'Nigeria', flag: '🇳🇬' },
      { href: '/us/phone-number-generator/br', label: 'Brazil', flag: '🇧🇷' },
      { href: '/us/phone-number-generator/ca', label: 'Canada', flag: '🇨🇦' },
      { href: '/us/phone-number-generator/au', label: 'Australia', flag: '🇦🇺' }
    ]
  },
  { href: '/about', label: 'About' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="bg-base-100 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo区域 */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 text-primary font-bold text-2xl"
          >
            <span>📱</span>
            <span>Random Phone Numbers</span>
          </Link>

          {/* 桌面端导航链接 */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => 
              'children' in link ? (
                <div 
                  key={link.label}
                  className="relative group"
                >
                  <button 
                    className={`
                      px-3 py-2 rounded-md text-base font-medium
                      transition-colors duration-200
                      text-base-content/70 hover:text-primary
                      flex items-center space-x-1
                    `}
                  >
                    <span>{link.label}</span>
                    <svg 
                      className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* 下拉菜单 */}
                  <div 
                    className="
                      absolute left-0 mt-0 w-56 rounded-md shadow-lg bg-base-100 ring-1 ring-black ring-opacity-5
                      invisible group-hover:visible opacity-0 group-hover:opacity-100
                      transition-all duration-200 transform -translate-y-2 group-hover:translate-y-0
                    "
                  >
                    <div className="py-1" role="menu">
                      {link.children && link.children.map(child => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`
                            flex items-center space-x-2 px-4 py-3 text-base
                            ${pathname === child.href 
                              ? 'text-primary bg-primary/10' 
                              : 'text-base-content/70 hover:text-primary hover:bg-base-200'
                            }
                          `}
                        >
                          <span>{child.flag}</span>
                          <span>{child.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    px-3 py-2 rounded-md text-base font-medium
                    transition-colors duration-200
                    ${pathname === link.href 
                      ? 'text-primary' 
                      : 'text-base-content/70 hover:text-primary'
                    }
                  `}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* 移动端菜单按钮 */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="btn btn-ghost btn-circle"
            >
              <span className={`menu-icon ${isMobileMenuOpen ? 'open' : ''}`}></span>
            </button>
          </div>
        </div>

        {/* 移动端菜单内容 */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/"
                className={`
                  block px-3 py-2 rounded-md text-base font-medium
                  ${pathname === '/' 
                    ? 'text-primary bg-primary/10' 
                    : 'text-base-content/70 hover:text-primary hover:bg-primary/5'
                  }
                `}
              >
                Home
              </Link>
              
              {/* 移动端的 Generators 菜单 */}
              <div className="space-y-1 pl-4">
                <div className="px-3 py-2 text-base font-medium text-base-content/70">
                  Generators
                </div>
                {navLinks[1].children && navLinks[1].children.map(child => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className={`
                      block px-3 py-2 rounded-md text-sm
                      ${pathname === child.href 
                        ? 'text-primary bg-primary/10' 
                        : 'text-base-content/70 hover:text-primary hover:bg-primary/5'
                      }
                    `}
                  >
                    <span className="mr-2">{child.flag}</span>
                    {child.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 