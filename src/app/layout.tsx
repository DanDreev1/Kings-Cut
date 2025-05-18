import "./globals.css"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "The King's Cut — Barbershop in Edinburgh",
  description: "Traditional grooming with a modern edge.",
  keywords: ["barbershop", "Edinburgh", "men's grooming", "haircut", "beard", "King's Cut"],
  authors: [{ name: "Daniil Andrieiev", url: "https://portfolio-delta-topaz-18.vercel.app/" }],
  openGraph: {
    title: "The King's Cut",
    description: "Premium barbershop in the heart of Edinburgh",
    url: "https://kingscut.vercel.app",
    siteName: "The King's Cut",
    images: ["/hero.jpg"],
    locale: "en_GB",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-sans bg-black text-white">
        <Header />
        {children}
        <Footer />
    </body>
    </html>
  )
}