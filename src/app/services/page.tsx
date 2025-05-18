"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const services = [
  {
    name: "Haircut",
    href: "/services/haircut",
    description: "Classic or modern styles tailored to your look.",
    price: "£20",
    emoji: "✂",
  },
  {
    name: "Beard Trim",
    href: "/services/beard-trim",
    description: "Crisp shaping and clean razor lines for any beard style.",
    price: "£15",
    emoji: "🧔",
  },
  {
    name: "Haircut + Beard",
    href: "/services/combo",
    description: "The full grooming experience — head to beard.",
    price: "£30",
    emoji: "💈",
    badge: "Best Value",
  },
  {
    name: "Student Cut",
    href: "/services/student-cut",
    description: "Sharp, affordable cuts with student discount.",
    price: "£15",
    emoji: "🎓",
  },
]

export default function ServicesPage() {
  return (
    <section className="py-20 bg-black text-white px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          className="text-4xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h1>

        <motion.p
          className="text-center text-gray-400 max-w-xl mx-auto mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Choose the service that fits your style — explore what we offer in detail.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0, delay: index * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="transition-transform duration-200"
            >
              <Link
                href={service.href}
                className="block bg-[#111827] border border-gray-800 p-6 rounded-xl hover:border-primary hover:bg-primary/5 hover:shadow-xl transition-all duration-200 cursor-pointer relative"
              >
                {service.badge && (
                  <div className="absolute top-2 right-4 bg-primary text-white text-xs px-2 py-1 rounded-full font-semibold">
                    {service.badge}
                  </div>
                )}

                <div className="text-primary text-xl mb-1">
                  {service.emoji} {service.name}
                </div>
                <p className="text-sm text-gray-400 mb-4">{service.description}</p>
                <p className="text-lg font-bold">{service.price}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}