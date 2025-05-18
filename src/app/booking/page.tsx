"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
  })

  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setStatus("idle")

    try {
      // Симуляция отправки (замени на реальный fetch, если нужно)
      await new Promise((res) => setTimeout(res, 1500))

      setStatus("success")
      setFormData({ name: "", email: "", date: "", time: "" })
    } catch (error) {
      setStatus("error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-md mx-auto">
        <motion.h1
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Book an Appointment
        </motion.h1>

        {/* ✅ Status messages */}
        {status === "success" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-600 text-white text-sm px-4 py-2 mb-4 rounded-md text-center"
          >
            ✅ Your appointment was successfully submitted!
          </motion.div>
        )}

        {status === "error" && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-red-600 text-white text-sm px-4 py-2 mb-4 rounded-md text-center"
          >
            ❌ Something went wrong, please try again.
          </motion.div>
        )}

        <motion.form
          onSubmit={handleSubmit}
          className="bg-[#111827] border border-gray-800 rounded-xl p-6 space-y-6 shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div>
            <label className="block mb-1 text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-[#1e293b] border border-gray-700 rounded-md px-4 py-2 text-sm text-white focus:outline-none focus:border-primary transition"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-[#1e293b] border border-gray-700 rounded-md px-4 py-2 text-sm text-white focus:outline-none focus:border-primary transition"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Preferred Date</label>
            <input
              type="date"
              name="date"
              required
              value={formData.date}
              onChange={handleChange}
              className="w-full bg-[#1e293b] border border-gray-700 rounded-md px-4 py-2 text-sm text-white focus:outline-none focus:border-primary transition [color-scheme:light]"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Preferred Time</label>
            <input
              type="time"
              name="time"
              required
              value={formData.time}
              onChange={handleChange}
              className="w-full bg-[#1e293b] border border-gray-700 rounded-md px-4 py-2 text-sm text-white focus:outline-none focus:border-primary transition [color-scheme:light]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full font-semibold py-2 px-4 rounded-md transition ${
              loading
                ? "bg-gray-600 cursor-not-allowed"
                : "border border-white bg-primary text-white hover:bg-white hover:text-black hover:shadow-lg"
            }`}
          >
            {loading ? "Submitting…" : "Submit"}
          </button>
        </motion.form>
      </div>
    </section>
  )
}
