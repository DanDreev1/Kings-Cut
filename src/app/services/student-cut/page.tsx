import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Student Haircut in Edinburgh | The King's Cut",
  description:
    "Affordable student haircuts in Edinburgh at The King's Cut. Sharp styles for a student budget.",
  openGraph: {
    title: "Student Haircut in Edinburgh | The King's Cut",
    description:
      "Stylish cuts for students at budget prices. Bring your ID and get a fresh cut today!",
    url: "https://yourdomain.com/services/student-cut",
    siteName: "The King's Cut",
    locale: "en_GB",
    type: "website",
  },
}

export default function StudentCutPage() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Student Haircuts</h1>
        <p className="text-gray-300 mb-8 text-lg">
          On a budget but still want to look sharp? Our <strong>student haircut service</strong> offers classic and modern styles at a price that fits student life.
        </p>

        <div className="grid sm:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#111827] border border-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2 text-primary">Offer includes:</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>✅ Any style haircut</li>
              <li>✅ Styling advice</li>
              <li>✅ Discount with student ID</li>
              <li>✅ Optional beard line-up (£5 extra)</li>
            </ul>
          </div>

          <div className="bg-[#111827] border border-gray-800 p-6 rounded-xl">
            <h3 className="text-xl font-semibold mb-2 text-primary">Why students love us:</h3>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>💸 £15 fixed price</li>
              <li>🎓 No appointment needed</li>
              <li>🧼 Clean, stylish space</li>
              <li>📍 5 min walk from university buildings</li>
            </ul>
          </div>
        </div>

        <Link
          href="/booking"
          className="inline-block bg-primary text-black font-semibold py-3 px-6 rounded hover:bg-white transition"
        >
          Book Student Cut
        </Link>
      </div>
    </section>
  )
}
