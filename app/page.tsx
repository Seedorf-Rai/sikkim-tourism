import CabBanner from "../components/cab-banner"
import BikeBanner from "../components/bike-banner"
import Footer from "../src/components/homepage/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <CabBanner />
      <BikeBanner />
      <Footer></Footer>
    </main>
  )
}
