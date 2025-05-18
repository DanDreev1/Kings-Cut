"use client"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Jack M.",
    review: "Best haircut I've had in years. Clean fade, relaxed vibe, and amazing staff!",
    rating: 5,
  },
  {
    name: "Daniel R.",
    review: "Came in for a beard trim and left feeling brand new. Highly recommend!",
    rating: 5,
  },
  {
    name: "Ewan L.",
    review: "Stylish shop, professional barbers, great price. What more could you want?",
    rating: 5,
  },
]

export default function TestimonialSection() {
  return (
    <section className="bg-white text-black py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="bg-gray-100 p-6 rounded-xl border border-gray-200 shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <p className="text-sm text-gray-700 mb-4 italic">"{t.review}"</p>
              <div className="text-primary text-lg mb-2">{"★".repeat(t.rating)}</div>
              <p className="font-semibold text-gray-800">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}