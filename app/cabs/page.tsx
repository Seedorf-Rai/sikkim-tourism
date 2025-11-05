"use client"

import { useState } from "react"
import VehicleCard from "../../components/vehicle-card"
import BookingModal from "../../components/booking-modal"
import Footer from "../../src/components/homepage/Footer"


const cabsData = [
  {
    id: "1",
    name: "Sedan Classic",
    company: "Yellow Cabs",
    capacity: 4,
    pricePerDay: 50,
    image: "/yellow-sedan-taxi.jpg",
  },
  {
    id: "2",
    name: "SUV Premium",
    company: "Elite Rides",
    capacity: 6,
    pricePerDay: 75,
    image: "/black-suv-taxi.jpg",
  },
  {
    id: "3",
    name: "Eco Compact",
    company: "Green Motors",
    capacity: 4,
    pricePerDay: 35,
    image: "/green-compact-car-taxi.jpg",
  },
  {
    id: "4",
    name: "Van Spacious",
    company: "Family Transport",
    capacity: 8,
    pricePerDay: 90,
    image: "/white-van-taxi.jpg",
  },
  {
    id: "5",
    name: "Luxury Executive",
    company: "Premium Fleet",
    capacity: 4,
    pricePerDay: 120,
    image: "/luxury-car-limousine.jpg",
  },
  {
    id: "6",
    name: "Standard Sedan",
    company: "City Cabs",
    capacity: 5,
    pricePerDay: 55,
    image: "/sedan-car-taxi.jpg",
  },
]

export default function CabsPage() {
  const [isOpen, setIsOpen] = useState(false)

  const handleBook = (id: string) => {
    console.log(id);
    setIsOpen(true)
  }

  return (
    <>
    <main className="min-h-screen container bg-background" style={{ paddingTop: '40px' , paddingBottom: '40px' }}>


      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cabsData.map((cab) => (
            <VehicleCard key={cab.id} {...cab} type="cab" onBook={handleBook} />
          ))}
        </div>
      </div>


      <BookingModal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false)
        }}
        type="cab"
      />
    </main>
      <Footer></Footer>
</>
  )
}
