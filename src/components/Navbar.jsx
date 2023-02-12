import { useState, useEffect } from 'react'
import { FaBars, FaTwitter, FaFacebookF, FaGoogle, FaInstagram } from 'react-icons/fa'

const ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Booking', href: '#booking' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' }
]

export default function Navbar() {
  const [isNavOpened, setIsNavOpened] = useState(false)

  const toggleNav = () => setIsNavOpened(!isNavOpened)

  useEffect(() => {
    if (isNavOpened) {
      document.body.classList.add('nav-active')
    } else {
      document.body.classList.remove('nav-active')
    }
  }, [isNavOpened])

  return (
    <nav className="w-full min-h-[50px] flex justify-between items-center absolute z-10 text-white bg-gray-700/80">
      <ul className="hidden sm:flex px-4">
        {ITEMS.map(({ label, href }) => (
          <li key={label}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>

      <div className="flex justify-between">
        <FaFacebookF className="mx-4 cursor-pointer" />
        <FaTwitter className="mx-4 cursor-pointer" />
        <FaGoogle className="mx-4 cursor-pointer" />
        <FaInstagram className="mx-4 cursor-pointer" />
      </div>

      {/* Hamburger Icon */}
      <div className="sm:hidden z-10">
        <FaBars size={20} className="mr-4 cursor-pointer" onClick={toggleNav} />
      </div>

      {/* Mobile Menu */}
      <div
        className={
          isNavOpened
            ? `overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 h-screen w-full bg-black/90 px-4 py-7 flex flex-col`
            : 'absolute top-0 h-screen left-[-100%] ease-in duration-300'
        }
      >
        <ul className="h-full w-full text-center pt-12">
          {ITEMS.map(({ label, href }) => (
            <li key={label} className="text-2xl py-8">
              <a href={href} onClick={toggleNav}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
