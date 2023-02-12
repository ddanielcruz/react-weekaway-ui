export default function Booking() {
  return (
    <section id="booking" className="max-w-6xl m-auto w-full p-4">
      <form
        className="w-full lg:flex justify-between items-center"
        onSubmit={e => e.preventDefault()}
      >
        <div className="flex flex-col my-2 p-2">
          <label>Destination</label>
          <select defaultValue="1" className="lg:w-72 w-full border rounded-md p-2 appearance-none">
            <option value="1">Grand Antigua</option>
            <option value="2">Key West</option>
            <option value="3">Maldives</option>
            <option value="4">Cozumel</option>
          </select>
        </div>

        <div className="flex w-full">
          <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
            <label>Check-In</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
            <label>Check-Out</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
        </div>

        <div className="flex flex-col my-2 p-2 w-full">
          <label>Search</label>
          <button className="w-full">Rates & Availabilities</button>
        </div>
      </form>
    </section>
  )
}
