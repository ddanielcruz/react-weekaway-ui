const CARDS = [
  {
    label: 'Resorts',
    image:
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
  },
  {
    label: 'Cruises',
    image:
      'https://images.unsplash.com/photo-1599640842225-85d111c60e6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
  },
  {
    label: 'Excursions',
    image:
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
  }
]

export default function Activities() {
  return (
    <section className="max-w-6xl m-auto w-full md:flex -mt-20">
      {CARDS.map(({ label, image }) => (
        <div className="relative p-4" key={label}>
          <h3 className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold text-white text-2xl">
            {label}
          </h3>
          <img
            src={image}
            alt={label}
            className="w-full h-full object-cover relative border-4 border-white shadow-lg"
          />
        </div>
      ))}
    </section>
  )
}
