import condenser from "../../assets/images/condenser.webp";

export default function Book() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-4 md:px-16 my-10">
      {/* Form Section */}
      <div className="flex flex-col gap-4 w-full md:w-[60%] lg:w-[40%]">
        <h1 className="text-red-400 text-3xl">Book Studio Session</h1>
        <span className="text-gray-200">Operates 24/7</span>

        <div className="flex flex-col sm:flex-row sm:gap-8 justify-between text-gray-200">
          <div className="flex flex-col flex-1 mb-3 sm:mb-0">
            <label>Date</label>
            <input
              className="py-2 px-2 rounded border border-red-100"
              type="date"
            />
          </div>
          <div className="flex flex-col flex-1">
            <label>Time</label>
            <input
              className="py-2 px-2 rounded border border-red-100"
              type="time"
            />
          </div>
        </div>

        <div className="text-gray-200 flex flex-col">
          <label>Name</label>
          <input
            type="text"
            placeholder="John Doe"
            className="py-2 px-2 rounded border border-red-100"
          />
        </div>

        <button className="bg-red-400 w-full py-2 mt-3 rounded text-white">
          Submit
        </button>
      </div>

      {/* Image Section */}
      <div className="hidden md:flex w-full bg-secondaryblack-500 rounded md:w-[40%] lg:w-[25%]">
        <img src={condenser} alt="Studio Mic" className="w-full h-auto rounded" />
      </div>
    </div>
  );
}
