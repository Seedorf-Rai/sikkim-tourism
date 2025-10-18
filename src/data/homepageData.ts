import type {
  Destination,
  Activity,
  Accommodation,
  CultureItem,
  Testimonial,
  TravelTip,
  EmergencyContact,
  GalleryImage,
} from "../types/homepage";

export const destinations: Destination[] = [
  {
    id: "gangtok",
    name: "Gangtok",
    description:
      "The vibrant capital city nestled in the Eastern Himalayas with modern amenities and traditional charm",
    image: "/placeholder.svg?height=400&width=600",
    duration: "2-3 days",
    difficulty: "Easy",
    suitableFor: "All Ages",
    highlights: ["MG Marg", "Rumtek Monastery", "Tsomgo Lake"],
    link: "#gangtok",
  },
  {
    id: "nathula-pass",
    name: "Nathula Pass",
    description:
      "Historic mountain pass on the Indo-China border offering breathtaking high-altitude views",
    image: "/placeholder.svg?height=400&width=600",
    duration: "1 day",
    difficulty: "Moderate",
    suitableFor: "All Ages",
    highlights: ["Border View", "Snow Mountains", "War Memorial"],
    link: "#nathula",
  },
  {
    id: "yuksom",
    name: "Yuksom",
    description:
      "The first capital of Sikkim and gateway to Kanchenjunga, perfect for trekking adventures",
    image: "/placeholder.svg?height=400&width=600",
    duration: "2-4 days",
    difficulty: "Challenging",
    suitableFor: "All Ages",
    highlights: [
      "Kanchenjunga Trek",
      "Coronation Throne",
      "Ancient Monasteries",
    ],
    link: "#yuksom",
  },
  {
    id: "pelling",
    name: "Pelling",
    description:
      "Scenic hill station with panoramic views of Kanchenjunga and ancient monasteries",
    image: "/placeholder.svg?height=400&width=600",
    duration: "2-3 days",
    difficulty: "Easy",
    suitableFor: "All Ages",
    highlights: ["Kanchenjunga View", "Pemayangtse Monastery", "Skywalk"],
    link: "#pelling",
  },
  {
    id: "lachung",
    name: "Lachung",
    description:
      "Picturesque mountain village gateway to Yumthang Valley and Zero Point",
    image: "/placeholder.svg?height=400&width=600",
    duration: "2-3 days",
    difficulty: "Moderate",
    suitableFor: "All Ages",
    highlights: ["Yumthang Valley", "Zero Point", "Hot Springs"],
    link: "#lachung",
  },
  {
    id: "namchi",
    name: "Namchi",
    description:
      "Cultural hub featuring the world's largest statue of Guru Padmasambhava",
    image: "/placeholder.svg?height=400&width=600",
    duration: "1-2 days",
    difficulty: "Easy",
    suitableFor: "All Ages",
    highlights: ["Char Dham", "Samdruptse Hill", "Rock Garden"],
    link: "#namchi",
  },
];

export const activities: Activity[] = [
  {
    id: "trekking",
    name: "Trekking & Hiking",
    description:
      "Explore pristine trails through rhododendron forests and alpine meadows",
    image: "/placeholder.svg?height=300&width=400",
    difficulty: "All Levels",
    actionLabel: "Book Experience",
  },
  {
    id: "photography",
    name: "Photography Tours",
    description: "Capture stunning landscapes, wildlife, and cultural heritage",
    image: "/placeholder.svg?height=300&width=400",
    difficulty: "Beginner",
    actionLabel: "Book Experience",
  },
  {
    id: "rafting",
    name: "River Rafting",
    description: "Navigate thrilling rapids on Teesta and Rangit rivers",
    image: "/placeholder.svg?height=300&width=400",
    difficulty: "Intermediate",
    actionLabel: "Book Experience",
  },
  {
    id: "wildlife",
    name: "Wildlife Safari",
    description:
      "Spot red pandas, snow leopards, and exotic birds in national parks",
    image: "/placeholder.svg?height=300&width=400",
    difficulty: "Easy",
    actionLabel: "Book Experience",
  },
  {
    id: "cultural",
    name: "Cultural Tours",
    description: "Visit ancient monasteries and experience local traditions",
    image: "/placeholder.svg?height=300&width=400",
    difficulty: "Easy",
    actionLabel: "Book Experience",
  },
  {
    id: "wellness",
    name: "Wellness Retreats",
    description: "Rejuvenate with yoga, meditation, and natural hot springs",
    image: "/placeholder.svg?height=300&width=400",
    difficulty: "All Levels",
    actionLabel: "Book Experience",
  },
];

export const accommodations: Accommodation[] = [
  {
    id: "himalayan-heritage",
    name: "Himalayan Heritage Resort",
    location: "Gangtok",
    description:
      "Experience luxury with panoramic Himalayan views and traditional Sikkimese hospitality",
    image: "/placeholder.svg?height=300&width=500",
    type: "Luxury Resort",
    rating: 4.8,
    pricePerNight: 8500,
    amenities: ["Mountain View", "Spa", "Restaurant", "WiFi"],
  },
  {
    id: "monastery-view",
    name: "Monastery View Homestay",
    location: "Pelling",
    description:
      "Stay with local families and experience authentic Sikkimese culture and cuisine",
    image: "/placeholder.svg?height=300&width=500",
    type: "Homestay",
    rating: 4.6,
    pricePerNight: 2500,
    amenities: ["Home Cooked Meals", "Cultural Experience", "Garden", "WiFi"],
  },
  {
    id: "alpine-adventure",
    name: "Alpine Adventure Lodge",
    location: "Lachung",
    description:
      "Perfect base for high-altitude adventures with cozy mountain lodge atmosphere",
    image: "/placeholder.svg?height=300&width=500",
    type: "Adventure Lodge",
    rating: 4.7,
    pricePerNight: 4200,
    amenities: ["Trekking Base", "Bonfire", "Local Cuisine", "Parking"],
  },
  {
    id: "eco-valley",
    name: "Eco Valley Resort",
    location: "Yuksom",
    description:
      "Sustainable luxury in pristine natural surroundings with minimal environmental impact",
    image: "/placeholder.svg?height=300&width=500",
    type: "Eco Resort",
    rating: 4.5,
    pricePerNight: 3800,
    amenities: ["Eco-Friendly", "Organic Food", "Nature Walks", "Solar Power"],
  },
  {
    id: "budget-backpacker",
    name: "Budget Backpacker Hostel",
    location: "Gangtok",
    description:
      "Clean, safe, and affordable accommodation perfect for budget travelers and backpackers",
    image: "/placeholder.svg?height=300&width=500",
    type: "Hostel",
    rating: 4.2,
    pricePerNight: 800,
    amenities: ["Shared Kitchen", "Common Area", "Laundry", "WiFi"],
  },
  {
    id: "heritage-palace",
    name: "Heritage Palace Hotel",
    location: "Namchi",
    description:
      "Stay in a restored palace with royal treatment and immersive cultural experiences",
    image: "/placeholder.svg?height=300&width=500",
    type: "Heritage Hotel",
    rating: 4.4,
    pricePerNight: 6500,
    amenities: [
      "Heritage Architecture",
      "Cultural Shows",
      "Fine Dining",
      "Concierge",
    ],
  },
];

export const cultureItems: CultureItem[] = [
  {
    id: "monasteries",
    title: "Buddhist Monasteries",
    description:
      "Ancient monasteries perched on hilltops, offering spiritual serenity and architectural marvels with centuries of history",
    image: "/placeholder.svg?height=300&width=400",
    icon: "🛕",
  },
  {
    id: "festivals",
    title: "Traditional Festivals",
    description:
      "Vibrant celebrations like Losar and Saga Dawa that showcase rich Tibetan and Nepali heritage with colorful costumes",
    image: "/placeholder.svg?height=300&width=400",
    icon: "🎭",
  },
  {
    id: "cuisine",
    title: "Local Cuisine",
    description:
      "Authentic flavors of momos, thukpa, and gundruk that reflect the region's diverse cultural influences and mountain ingredients",
    image: "/placeholder.svg?height=300&width=400",
    icon: "🍜",
  },
  {
    id: "handicrafts",
    title: "Handicrafts & Arts",
    description:
      "Exquisite handwoven textiles, traditional carpets, and intricate wood carvings that preserve ancient artistic traditions",
    image: "/placeholder.svg?height=300&width=400",
    icon: "🎨",
  },
  {
    id: "rituals",
    title: "Sacred Rituals",
    description:
      "Spiritual ceremonies and prayer rituals that connect the community with nature and Buddhist teachings",
    image: "/placeholder.svg?height=300&width=400",
    icon: "🙏",
  },
  {
    id: "music-dance",
    title: "Folk Music & Dance",
    description:
      "Traditional performances featuring ancient instruments and storytelling through graceful movements and melodies",
    image: "/placeholder.svg?height=300&width=400",
    icon: "🎵",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "sarah",
    name: "Sarah Johnson",
    location: "New York, USA",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    experience: "Goecha La Trek",
    comment:
      "Sikkim exceeded all my expectations! The mountain views were breathtaking, and the local people were incredibly welcoming. The trek to Goecha La was the highlight of my trip.",
  },
  {
    id: "raj",
    name: "Raj Patel",
    location: "Mumbai, India",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    experience: "Photography Tour",
    comment:
      "As a photography enthusiast, Sikkim was paradise. Every corner offered a new perspective, from the monasteries to the rhododendron forests. Absolutely magical!",
  },
  {
    id: "emma",
    name: "Emma Thompson",
    location: "London, UK",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    experience: "Cultural Homestay",
    comment:
      "The cultural immersion was incredible. Staying in a homestay in Pelling gave us authentic insights into Sikkimese life. The food was amazing too!",
  },
  {
    id: "david",
    name: "David Chen",
    location: "Singapore",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    experience: "Adventure Package",
    comment:
      "Perfect blend of adventure and tranquility. The river rafting was thrilling, and the monastery visits were so peaceful. Sikkim has something for everyone.",
  },
  {
    id: "maria",
    name: "Maria Rodriguez",
    location: "Barcelona, Spain",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    experience: "Wildlife Safari",
    comment:
      "The biodiversity in Sikkim is incredible! We spotted red pandas and so many bird species. The guides were knowledgeable and passionate about conservation.",
  },
  {
    id: "james",
    name: "James Wilson",
    location: "Sydney, Australia",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    experience: "Scenic Tour",
    comment:
      "Sikkim's natural beauty is unmatched. The sunrise from Tiger Hill and the serenity of Tsomgo Lake will stay with me forever. Can't wait to return!",
  },
];

export const travelTips: TravelTip[] = [
  {
    id: "best-time",
    title: "Best Time to Visit",
    description:
      "March to May and October to December offer clear skies and pleasant weather. Avoid monsoons (June-September).",
    icon: "📅",
  },
  {
    id: "weather",
    title: "Weather & Climate",
    description:
      "Pack layers! Temperatures vary greatly with altitude. Carry warm clothes even in summer for high-altitude areas.",
    icon: "🌡️",
  },
  {
    id: "packing",
    title: "What to Pack",
    description:
      "Sturdy trekking shoes, warm clothing, rain gear, sunscreen, first aid kit, and portable charger are essentials.",
    icon: "🎒",
  },
  {
    id: "permits",
    title: "Permits & Documents",
    description:
      "Inner Line Permit required for non-Sikkimese Indians. Foreign tourists need Protected Area Permit. Carry ID proofs.",
    icon: "📋",
  },
  {
    id: "transport",
    title: "Getting Around",
    description:
      "Shared taxis are common. Book vehicles in advance for remote areas. Roads can be challenging during monsoons.",
    icon: "🚗",
  },
  {
    id: "health",
    title: "Health & Safety",
    description:
      "Acclimatize gradually to high altitudes. Carry altitude sickness medication. Stay hydrated and avoid alcohol initially.",
    icon: "🏥",
  },
];

export const emergencyContacts: EmergencyContact[] = [
  { service: "Tourist Helpline", number: "1363" },
  { service: "Police", number: "100" },
  { service: "Medical Emergency", number: "108" },
  { service: "Fire Service", number: "101" },
];

export const localEtiquette: string[] = [
  "Respect local customs and traditions",
  "Remove shoes before entering monasteries",
  "Don't point feet towards Buddha statues",
  "Ask permission before photographing people",
];

export const galleryImages: GalleryImage[] = [
  {
    id: "kanchenjunga-sunrise",
    title: "Kanchenjunga at Sunrise",
    location: "Pelling",
    image: "/placeholder.svg?height=400&width=600",
    category: "Landscapes",
    likes: 342,
    views: 1250,
  },
  {
    id: "prayer-ceremony",
    title: "Prayer Ceremony",
    location: "Rumtek Monastery",
    image: "/placeholder.svg?height=400&width=600",
    category: "Culture",
    likes: 287,
    views: 980,
  },
  {
    id: "red-panda",
    title: "Red Panda",
    location: "Khangchendzonga National Park",
    image: "/placeholder.svg?height=400&width=600",
    category: "Wildlife",
    likes: 456,
    views: 1890,
  },
  {
    id: "river-rafting",
    title: "River Rafting",
    location: "Teesta River",
    image: "/placeholder.svg?height=400&width=600",
    category: "Adventure",
    likes: 198,
    views: 756,
  },
  {
    id: "yumthang-valley",
    title: "Valley of Flowers",
    location: "Yumthang",
    image: "/placeholder.svg?height=400&width=600",
    category: "Landscapes",
    likes: 523,
    views: 2134,
  },
  {
    id: "traditional-dance",
    title: "Traditional Dance",
    location: "Gangtok",
    image: "/placeholder.svg?height=400&width=600",
    category: "Culture",
    likes: 312,
    views: 1045,
  },
  {
    id: "snow-leopard",
    title: "Snow Leopard",
    location: "High Altitude",
    image: "/placeholder.svg?height=400&width=600",
    category: "Wildlife",
    likes: 678,
    views: 2890,
  },
  {
    id: "mountain-trekking",
    title: "Mountain Trekking",
    location: "Goecha La",
    image: "/placeholder.svg?height=400&width=600",
    category: "Adventure",
    likes: 234,
    views: 890,
  },
  {
    id: "tsomgo-lake",
    title: "Sacred Lake",
    location: "Tsomgo Lake",
    image: "/placeholder.svg?height=400&width=600",
    category: "Landscapes",
    likes: 445,
    views: 1678,
  },
];
