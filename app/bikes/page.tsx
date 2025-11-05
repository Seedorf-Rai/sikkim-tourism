"use client"

import { useState } from "react"
import VehicleCard from "../../components/vehicle-card"
import BookingModal from "../../components/booking-modal"
import Footer from "../../src/components/homepage/Footer"


const bikesData = [
  {
    id: "1",
    name: "Cruiser Classic",
    company: "Ride Freedom",
    capacity: 1,
    pricePerDay: 25,
    image: "/classic-cruiser-motorcycle.jpg",
  },
  {
    id: "2",
    name: "Sport Bike 600cc",
    company: "Speed Demons",
    capacity: 2,
    pricePerDay: 45,
    image: "/red-sport-bike-motorcycle.jpg",
  },
  {
    id: "3",
    name: "Adventure Tourer",
    company: "Explorer Bikes",
    capacity: 2,
    pricePerDay: 60,
    image: "/adventure-touring-motorcycle.jpg",
  },
  {
    id: "4",
    name: "Street Fighter",
    company: "Urban Riders",
    capacity: 2,
    pricePerDay: 40,
    image: "/black-street-fighter-bike.jpg",
  },
  {
    id: "5",
    name: "Retro Classic",
    company: "Vintage Motors",
    capacity: 1,
    pricePerDay: 35,
    image: "/vintage-retro-motorcycle.jpg",
  },
  {
    id: "6",
    name: "Scooter Easy Ride",
    company: "Urban Scooters",
    capacity: 2,
    pricePerDay: 20,
    image: "/modern-scooter-bike.jpg",
  },
]

export default function BikesPage() {
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
          {bikesData.map((bike) => (
            <VehicleCard key={bike.id} {...bike} type="bike" onBook={handleBook} />
          ))}
        </div>
      </div>



      <BookingModal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false)
        }}
        type="bike"
      />
    </main>
         <Footer></Footer>
         </>
  )
}
