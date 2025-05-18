"use client"
import { motion } from "framer-motion"

export default function HeroSection() {
  return (
    <section className="bg-[url('/hero.jpg')] bg-cover bg-center text-white py-28 px-6 text-center relative">
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      <motion.div
        className="relative z-10 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-primary uppercase text-sm tracking-widest mb-4">Premium Grooming</p>

        <h2 className="text-5xl font-bold mb-4">Your Style. Our Craft.</h2>

        <p className="text-lg text-gray-200 mb-6">
          Traditional grooming with a modern twist — right here in Edinburgh.
        </p>

        <div className="flex justify-center gap-4 mt-6 flex-wrap">
            <a
                href="/booking"
                className="border border-white bg-white text-black font-semibold py-2 px-6 rounded hover:bg-primary hover:text-white hover:bg-black transition"
            >
                Book Now
            </a>
            <a
                href="/services"
                className="border border-white text-white py-2 px-6 rounded hover:bg-white hover:text-black transition"
            >
                View Services
            </a>
            <a
                href="/services"
                className="pt-4 inline-block text-sm text-primary animate-bounce"
            >
                ↓ See our services
            </a>
        </div>

        <p className="mt-10 text-sm text-gray-400 italic">
          Rated ★★★★★ by 250+ clients · 10+ years of experience
        </p>
      </motion.div>
    </section>
  )
}
