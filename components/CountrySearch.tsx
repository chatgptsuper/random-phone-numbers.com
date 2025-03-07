'use client'

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { countries } from './CountryGrid'

export default function CountrySearch() {
  const [searchTerm, setSearchTerm] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)
  const [suggestions, setSuggestions] = useState<typeof countries>([])
  const router = useRouter()
  const dropdownRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // 处理搜索提交
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      router.push(`/phone-number-generator?search=${encodeURIComponent(searchTerm.trim())}`)
      setShowDropdown(false)
    }
  }

  // 处理输入变化，更新建议列表
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)
    
    if (value.trim()) {
      const searchLower = value.toLowerCase()
      const filtered = countries.filter(country => 
        country.name.toLowerCase().includes(searchLower) || 
        country.code.toLowerCase().includes(searchLower)
      ).slice(0, 5) // 限制显示前5个结果
      
      setSuggestions(filtered)
      setShowDropdown(filtered.length > 0)
    } else {
      setSuggestions([])
      setShowDropdown(false)
    }
  }

  // 选择建议
  const selectSuggestion = (country: typeof countries[0]) => {
    setSearchTerm(country.name)
    setShowDropdown(false)
    router.push(`/phone-number-generator/${country.code}`)
  }

  // 点击外部关闭下拉框
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) && 
          inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setShowDropdown(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="w-full relative">
      <form onSubmit={handleSubmit} className="relative">
        <input
          ref={inputRef}
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          onFocus={() => searchTerm.trim() && suggestions.length > 0 && setShowDropdown(true)}
          placeholder="Search by country name or code..."
          className="w-full px-4 py-3 pl-10 rounded-lg border border-base-300 bg-base-100 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <button 
          type="submit"
          className="absolute inset-y-0 right-0 px-4 py-2 bg-primary text-white rounded-r-lg hover:bg-primary/90 transition-colors"
        >
          Search
        </button>
      </form>

      {/* 自动完成下拉框 */}
      {showDropdown && (
        <div 
          ref={dropdownRef}
          className="absolute z-10 mt-1 w-full bg-base-100 border border-base-300 rounded-lg shadow-lg overflow-hidden"
        >
          {suggestions.map(country => (
            <div 
              key={country.code}
              onClick={() => selectSuggestion(country)}
              className="flex items-center p-3 hover:bg-base-200 cursor-pointer"
            >
              <span className="text-xl mr-2">{country.flag}</span>
              <div>
                <div className="font-medium">{country.name}</div>
                <div className="text-xs text-base-content/60">{country.code}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}