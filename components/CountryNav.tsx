import Link from 'next/link';

export default function CountryNav() {
  return (
    <nav className="flex flex-wrap gap-2 justify-center py-4">
      <Link href="/us" className="btn btn-ghost">
        US Numbers
      </Link>
      <Link href="/uk" className="btn btn-ghost">
        UK Numbers
      </Link>
      {/* 添加其他国家链接 */}
    </nav>
  )
} 