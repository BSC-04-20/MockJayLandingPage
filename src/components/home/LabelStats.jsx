export default function LabelStats() {
  const stats = [
    { value: "5+", label: "Artists Signed" },
    { value: "500+", label: "Studio Sessions Booked" },
    { value: "12", label: "Awards Won" },
    { value: "10", label: "Years in the Game" },
  ];

  return (
    <section className="bg-black font-inter text-white py-16 px-6 md:px-[10%]">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-red-500">Label Stats</h2>
        <p className="text-gray-300 mt-2">Numbers that tell our story of hustle, hits, and heat.</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, idx) => (
          <div key={idx} className="bg-secondaryblack-500 p-6 rounded-xl shadow-lg hover:bg-gray-900 transition-all">
            <div className="text-4xl md:text-5xl font-bold text-red-400">{stat.value}</div>
            <div className="mt-2 text-gray-300 font-semibold text-sm md:text-base">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
