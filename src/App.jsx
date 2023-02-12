import Activities from './components/Activities.jsx'
import Booking from './components/Booking.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import Gallery from './components/Gallery.jsx'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import TopBar from './components/TopBar.jsx'

export default function App() {
  return (
    <main>
      <TopBar />
      <Navbar />
      <Hero />
      <Activities />
      <Booking />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
