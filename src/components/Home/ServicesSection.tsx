"use client"
import { motion } from "framer-motion"
import { Scissors, Sparkles, User } from "lucide-react"  // Установи: npm i lucide-react

const services = [
  {
    name: "Haircut",
    desc: "Classic & modern styles tailored to you",
    price: "£20",
    icon: <Scissors size={32} />,
  },
  {
    name: "Beard Trim",
    desc: "Sharp lines and clean edges",
    price: "£15",
    icon: <Sparkles size={32} />,
  },
  {
    name: "Haircut + Beard",
    desc: "The full grooming package",
    price: "£30",
    icon: <Scissors size={32} />,
  },
  {
    name: "Student Cut",
    desc: "Stylish cut at a student price",
    price: "£15",
    icon: <User size={32} />,
  },
]

export default function ServicesSection() {
  return (
    <section className="py-16 px-6 bg-white text-black">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h3
          className="text-3xl font-bold mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
                key={service.name}
                className="relative flex flex-col border border-gray-200 p-6 pl-8 rounded-xl shadow-md hover:shadow-xl hover:bg-primary/10 transition group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
            >
                {/* Левая вертикальная линия */}
                <div className="absolute top-6 bottom-6 left-0 w-1 bg-primary rounded-r-lg"></div>

                <div className="flex items-center justify-center mb-4 text-primary">
                    {service.icon}
                </div>
                <h4 className="text-xl font-semibold mb-1">{service.name}</h4>
                <p className="text-sm text-gray-600 mb-3">{service.desc}</p>
                <p className="text-primary text-lg font-bold">{service.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
