export default function Hero() {
  return (
    <section className="w-full h-[90vh]">
      <img
        src="https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3433&q=80"
        alt="Hero image"
        className="w-full h-full object-cover brightness-90"
      />

      <div className="max-w-6xl mx-auto">
        <div className="absolute top-[40%] w-full md:-[50%] max-w-2xl flex flex-col text-white p-4">
          <h1 className="font-bold text-3xl md:text-4xl">Find Your Special Trip</h1>
          <h2 className="text-3xl md:text-4xl py-4 italic">With Weekaway</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis odit illo voluptas
            harum deleniti vel odio rem unde, mollitia distinctio praesentium quisquam ipsam velit
            perspiciatis? Nihil perspiciatis dolorum voluptates possimus.
          </p>
        </div>
      </div>
    </section>
  )
}
