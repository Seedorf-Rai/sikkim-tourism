import type { Tour } from "../types/tour";

export const nathulaShareingTourData: Tour = {
  id: "nathula-sharing-tour-1d",
  title: "Nathula Sharing Tour – 1 Day",
  description:
    "Experience the thrill of visiting Nathula Pass (14,140 ft), one of the most iconic mountain passes on the Indo-China border, with our 1 Day Nathula Sharing Tour from Gangtok. This budget-friendly trip is perfect for travelers who wish to explore Nathula in a shared vehicle without the hassle of arranging permits and transport.",
  price: 0, // Set dynamically
  duration: "1 day",
  type: "Sharing Tour",
  rating: 5,
  reviewCount: 1,
  maxGuests: 1,
  minAge: 3,
  languages: ["English", "Hindi", "Nepali"],
  bestTime: "October to May (best), June to September (monsoon)",
  itinerary: [
    {
      day: 1,
      title: "Tsomgo Lake, Baba Mandir & Nathula Pass",
      activities: [
        "Morning Departure (8:00 AM): Pickup from Vajra Stand, Gangtok in a shared vehicle.",
        "Tsomgo Lake (Changu Lake): Visit the sacred high-altitude glacial lake en route.",
        "Baba Mandir: Pay respects at the famous shrine dedicated to Baba Harbhajan Singh.",
        "Nathula Pass: Reach the Indo-China border and witness breathtaking Himalayan landscapes.",
        "Evening Return (4:00–5:00 PM): Drive back to Gangtok.",
      ],
    },
  ],
  amenities: [
    {
      id: "permit",
      name: "Permit Included",
      included: true,
    },
    {
      id: "sightseeing",
      name: "Sightseeing Included",
      included: true,
    },
    {
      id: "shared-vehicle",
      name: "Shared Vehicle",
      included: true,
    },
    {
      id: "professional-guide",
      name: "Professional Guide & Driver",
      included: true,
    },
  ],
  inclusions: [
    "Shared vehicle (permit included)",
    "Professional driver & guide assistance",
    "All required permits for Nathula Pass",
  ],
  exclusions: [
    "Meals, snacks, and personal expenses",
    "Entry fees (if applicable)",
    "Anything not mentioned in inclusions",
  ],
  requirements: [
    "Original ID proof (mandatory for permits)",
    "Warm clothes, gloves, and cap",
    "Sunglasses & sunscreen",
    "Snacks & water",
  ],
  faqs: [
    {
      id: "faq-1",
      question: "Do I need a permit to visit Nathula Pass?",
      answer:
        "Yes, a permit from the District Administration is mandatory. Our package includes this permit.",
    },
    {
      id: "faq-2",
      question: "Who can visit Nathula Pass?",
      answer:
        "Indian citizens and registered foreigners can visit. Our guides will assist with all requirements.",
    },
    {
      id: "faq-3",
      question: "On which days is Nathula Pass open for tourists?",
      answer:
        "Usually open from Wednesday to Sunday. Closed on Mondays and Tuesdays. Verify dates before booking.",
    },
    {
      id: "faq-4",
      question: "What is the best time to visit Nathula Pass?",
      answer:
        "October to May offers the best weather. June to September experiences monsoon conditions.",
    },
    {
      id: "faq-5",
      question: "Is Nathula Pass suitable for senior citizens and children?",
      answer:
        "Children above 3 years can visit with proper acclimatization. Senior citizens should consult their doctor.",
    },
    {
      id: "faq-6",
      question: "What should I wear and carry to Nathula Pass?",
      answer:
        "Wear warm clothes, carry sunscreen, sunglasses, and sufficient water due to high altitude.",
    },
    {
      id: "faq-7",
      question: "Is photography allowed at Nathula Pass?",
      answer:
        "Yes, photography is allowed for personal use. Avoid commercial photography.",
    },
    {
      id: "faq-8",
      question: "Will I find snow at Nathula Pass?",
      answer:
        "Yes, December to February usually has snow. Other months may have no snow depending on weather.",
    },
    {
      id: "faq-9",
      question: "How far is Nathula Pass from Gangtok?",
      answer: "Approximately 52 km from Gangtok, about 1.5-2 hours drive.",
    },
    {
      id: "faq-10",
      question: "Can Foreigners visit Nathula Pass?",
      answer:
        "Yes, registered foreigners can visit with proper documentation and permits.",
    },
    {
      id: "faq-11",
      question: "Is the road to Nathula safe?",
      answer:
        "Yes, the road is well-maintained. Our experienced drivers ensure safe travel.",
    },
    {
      id: "faq-12",
      question: "What permits are required?",
      answer:
        "A permit from the District Administration is required. We handle this for you.",
    },
    {
      id: "faq-13",
      question: "What are the documents required for a Nathula Permit?",
      answer:
        "Original ID proof, citizenship certificate, or passport. Contact us for complete details.",
    },
  ],
  locations: [
    {
      name: "Tsomgo Lake",
      altitude: "12,400 ft",
      distance: "28 km from Gangtok",
    },
    {
      name: "Baba Mandir",
      altitude: "13,500 ft",
      distance: "37 km from Gangtok",
    },
    {
      name: "Nathula Pass",
      altitude: "14,140 ft",
      distance: "52 km from Gangtok",
    },
  ],
  reviews: [
    {
      id: "review-1",
      author: "kiken",
      rating: 5,
      comment: "Nicee",
      date: "April 16, 2025",
    },
  ],
};
