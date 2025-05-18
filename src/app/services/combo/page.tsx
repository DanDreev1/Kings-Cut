import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Haircut + Beard Combo | The King's Cut",
  description:
    "Get the full grooming experience at The King's Cut — haircut & beard trim in one premium service.",
  openGraph: {
    title: "Haircut + Beard Combo | The King's Cut",
    description:
      "The ultimate grooming package — sharp haircut and beard trim together. Book today in Edinburgh.",
    url: "https://yourdomain.com/services/combo",
    siteName: "The King's Cut",
    locale: "en_GB",
    type: "website",
  },
}

export default function ComboPage() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Haircut + Beard Combo</h1>
        <p className="text-gray-300 mb-8 text-lg">
          Our most popular service — a complete transformation from head to beard, done by the best hands in Edinburgh.
        </p>

        <div className="grid sm:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#111827] border border-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2 text-primary">What’s included:</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>✂ Haircut of your choice</li>
              <li>🧔 Beard trim with razor definition</li>
              <li>🧴 Product finish</li>
              <li>🧖 Optional hot towel service</li>
            </ul>
          </div>

          <div className="bg-[#111827] border border-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2 text-primary">Why book the combo?</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>🎯 Best value</li>
              <li>📸 Perfect for events, dates, job interviews</li>
              <li>💈 2-in-1 convenience</li>
              <li>💬 Style advice included</li>
            </ul>
          </div>
        </div>

        <Link
          href="/booking"
          className="inline-block bg-primary text-black font-semibold py-3 px-6 rounded hover:bg-white transition"
        >
          Book Combo
        </Link>
      </div>
    </section>
  )
}
