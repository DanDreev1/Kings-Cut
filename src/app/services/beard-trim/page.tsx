import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Beard Trim in Edinburgh | The King's Cut",
  description:
    "Sharp beard trims and clean finishes at The King's Cut. Edinburgh’s go-to barbershop for stylish grooming.",
  openGraph: {
    title: "Beard Trim in Edinburgh | The King's Cut",
    description:
      "Professional beard shaping, trimming, and styling at our top-rated Edinburgh barbershop.",
    url: "https://yourdomain.com/services/beard-trim",
    siteName: "The King's Cut",
    locale: "en_GB",
    type: "website",
  },
}

export default function BeardTrimPage() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Beard Trim & Styling</h1>
        <p className="text-gray-300 mb-8 text-lg">
          Whether you're after a crisp line-up or a natural shape, our barbers at <strong>The King's Cut</strong> will refine your beard
          to perfection using razors, trimmers, and expert care.
        </p>

        <div className="grid sm:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#111827] border border-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2 text-primary">Service includes:</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>✅ Precision trimming & shaping</li>
              <li>✅ Razor detailing</li>
              <li>✅ Beard oil treatment</li>
              <li>✅ Hot towel finish</li>
            </ul>
          </div>

          <div className="bg-[#111827] border border-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2 text-primary">Why us?</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>🔥 Specialist in beard styling</li>
              <li>📍 Central Edinburgh location</li>
              <li>💬 Consultations included</li>
              <li>🧼 Hygiene & precision guaranteed</li>
            </ul>
          </div>
        </div>

        <Link
          href="/booking"
          className="inline-block bg-primary text-black font-semibold py-3 px-6 rounded hover:bg-white transition"
        >
          Book Beard Trim
        </Link>
      </div>
    </section>
  )
}