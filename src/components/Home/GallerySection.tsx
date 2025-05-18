"use client"
import { motion } from "framer-motion"

const images = [
  "/gallery/interior.jpg",
  "/gallery/chair.jpg",
  "/gallery/scissors.jpg",
  "/gallery/fade.jpg",
  "/gallery/mirror.jpg",
  "/gallery/shave.jpg",
]

export default function GallerySection() {
  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Inside The Shop</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <motion.div
              key={i}
              className="overflow-hidden rounded-xl border border-gray-800"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <img
                src={src}
                alt={`Gallery image ${i + 1}`}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}