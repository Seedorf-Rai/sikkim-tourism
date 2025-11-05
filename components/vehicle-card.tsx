"use client"


interface VehicleCardProps {
  id: string
  name: string
  company: string
  capacity: number
  pricePerDay: number
  image?: string
  type: "cab" | "bike"
  onBook: (id: string) => void
}

export default function VehicleCard({
  id,
  name,
  company,
  capacity,
  pricePerDay,
  image,
  type,
  onBook,
}: VehicleCardProps) {
  return (
    <div className="accommodation-card vehicle-card overflow-hidden">
      <div className="accommodation-image vehicle-image relative h-48 bg-gray-100">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div
          className={`accommodation-type absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-medium ${
            type === "cab" ? "bg-yellow-100 text-yellow-800" : "bg-red-100 text-red-800"
          }`}
        >
          {type === "cab" ? "Cab" : "Bike"}
        </div>
      </div>

      <div className="accommodation-content vehicle-content p-6">
        <div className="accommodation-header vehicle-header mb-4 flex items-start justify-between gap-4">
          <div>
            <h3 className="accommodation-name vehicle-name text-xl font-bold">{name}</h3>
            <p className="accommodation-location vehicle-company text-sm text-muted-foreground">{company}</p>
          </div>

          <div className="accommodation-rating vehicle-capacity text-right">
            <div className="text-sm text-muted-foreground">Capacity</div>
            <div className="font-semibold">{capacity} {capacity === 1 ? "person" : "people"}</div>
          </div>
        </div>

        <p className="accommodation-description vehicle-desc text-sm mb-4 text-gray-600">
          {/* optional short description or model info could go here */}
          Comfortable, well-maintained {type} suitable for local travel and mountain roads.
        </p>

        <div className="accommodation-footer vehicle-footer mt-4 flex items-center justify-between">
          <div className="price">
            <span className="price-amount text-2xl font-bold">₹{pricePerDay.toLocaleString()}</span>
            <span className="price-period text-sm text-muted-foreground">/day</span>
          </div>

          <button
            onClick={() => onBook(id)}
            className={`btn btn-primary btn-small rounded-lg py-2 px-4 font-semibold ${
              type === "cab" ? "bg-yellow-500 hover:bg-yellow-600 text-black" : "bg-red-500 hover:bg-red-600 text-white"
            }`}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}
