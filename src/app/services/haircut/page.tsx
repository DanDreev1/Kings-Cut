import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Haircut in Edinburgh | The King's Cut",
  description:
    "Looking for a sharp haircut in Edinburgh? The King's Cut barbershop offers classic and modern men's styles at affordable prices.",
  openGraph: {
    title: "Haircut in Edinburgh | The King's Cut",
    description:
      "Get a professional haircut tailored to your style at The King's Cut — top-rated barbershop on the Royal Mile.",
    url: "https://yourdomain.com/services/haircut",
    siteName: "The King's Cut",
    locale: "en_GB",
    type: "website",
  },
}

export default function HaircutPage() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Men’s Haircuts in Edinburgh</h1>
        <p className="text-gray-300 mb-8 text-lg">
          At <strong>The King's Cut</strong>, we believe your haircut should be as sharp as your style. Whether you're after a
          traditional look or a modern fade, our experienced barbers will deliver precision with every cut.
        </p>

        <div className="grid sm:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#111827] border border-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2 text-primary">What’s included</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>✅ Consultation with your barber</li>
              <li>✅ Classic, skin fade or scissor cut</li>
              <li>✅ Razor detailing & styling</li>
              <li>✅ Finishing with premium products</li>
            </ul>
          </div>

          <div className="bg-[#111827] border border-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2 text-primary">Why choose us?</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>🏆 250+ 5-star reviews</li>
              <li>📍 Located on Royal Mile</li>
              <li>🎯 10+ years of experience</li>
              <li>🕒 Walk-ins welcome & easy online booking</li>
            </ul>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-4">What clients say:</h3>
          <div className="space-y-4 text-sm text-gray-300 italic">
            <p>“Best haircut I’ve had in Edinburgh. The fade was perfect.” — <span className="text-primary">James L.</span></p>
            <p>“Great conversation, relaxing experience, and sharp results.” — <span className="text-primary">Michael T.</span></p>
          </div>
        </div>

        <Link
          href="/booking"
          className="inline-block bg-primary text-black font-semibold py-3 px-6 rounded hover:bg-white transition"
        >
          Book Your Cut Now
        </Link>
      </div>
    </section>
  )
}