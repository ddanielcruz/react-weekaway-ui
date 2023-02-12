import { BsChatSquareDots } from 'react-icons/bs'

export default function Footer() {
  return (
    <footer className="max-w-6xl w-full py-8 m-auto border-t-2">
      <div className="flex items-center m-auto justify-center">
        <BsChatSquareDots size={30} className="text-[var(--primary-dark)] mr-2" />
        <h1 className="text-xl font-bold text-gray-700">WEEKAWAY</h1>
      </div>
    </footer>
  )
}
