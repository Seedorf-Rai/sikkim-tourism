"use client"

import { useState } from "react"
import { Link } from "react-router-dom"

import BookingModal from "./booking-modal"
import { Button } from "../src/components/common"

export default function CabBanner() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <section
        className="relative h-96 md:h-[550px] bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url(https://images.pexels.com/photos/5835325/pexels-photo-5835325.jpeg)",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 max-w-3xl text-center px-6 md:px-12 text-white">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6 drop-shadow-lg text-white !text-white">
            Cab Bookings
          </h1>

          <p className="text-lg md:text-2xl text-gray-100 mb-10 leading-relaxed">
            Book reliable cabs instantly. Travel comfortably and safely with our trusted fleet of professional drivers.
          </p>
          <div className="flex  justify-center gap-4">
            <Link to="/cabs">
              <Button  label="See More" />
            </Link>
          </div>
        </div>
      </section>

      <BookingModal isOpen={isOpen} onClose={() => setIsOpen(false)} type="cab" />
    </>
  )
}