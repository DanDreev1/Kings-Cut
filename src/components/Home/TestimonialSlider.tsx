"use client"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useEffect, useRef } from "react"

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
  {
    name: "Jordan P.",
    review: "Warm atmosphere and great conversation. A true classic barbershop feel!",
    rating: 5,
  },
]

export default function TestimonialSlider() {
  const domRef = useRef<HTMLDivElement>(null)
  const [setSliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1, spacing: 16 },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 24 },
      },
    },
  })

  // ✅ Автопрокрутка
  useEffect(() => {
    let timeout: NodeJS.Timeout
    let mouseOver = false

    const clearNextTimeout = () => clearTimeout(timeout)
    const nextTimeout = () => {
      clearTimeout(timeout)
      if (mouseOver) return
      timeout = setTimeout(() => {
        slider.current?.next()
      }, 3000)
    }

    const el = domRef.current
    if (el) {
      el.addEventListener("mouseover", () => {
        mouseOver = true
        clearNextTimeout()
      })
      el.addEventListener("mouseout", () => {
        mouseOver = false
        nextTimeout()
      })
    }

    slider.current?.on("created", nextTimeout)
    slider.current?.on("dragStarted", clearNextTimeout)
    slider.current?.on("animationEnded", nextTimeout)
    slider.current?.on("updated", nextTimeout)

    return () => clearTimeout(timeout)
  }, [slider])

  return (
    <section className="bg-white text-black py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>

        <div className="overflow-hidden px-4" ref={domRef}>
          <div ref={setSliderRef} className="keen-slider">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="keen-slider__slide bg-gray-100 p-6 rounded-xl border border-gray-200 shadow hover:shadow-lg transition text-left"
              >
                <p className="text-sm text-gray-700 mb-4 italic">"{t.review}"</p>
                <div className="text-primary text-lg mb-2">{"★".repeat(t.rating)}</div>
                <p className="font-semibold text-gray-800">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}