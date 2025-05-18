'use client'

import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-black text-white px-6 py-10 shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-wide">The King's Cut</h1>
        <nav className="space-x-6 text-sm">
          <Link href="/" className="hover:text-primary">Home</Link>
          <Link href="/services" className="hover:text-primary">Services</Link>
          <Link href="/booking" className="hover:text-primary">Booking</Link>
        </nav>
      </div>
    </header>
  )
}
