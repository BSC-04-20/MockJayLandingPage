import React from "react";

export default function AboutLabel() {
  return (
    <div className="min-h-screen font-inter bg-black text-white px-6 md:px-20 my-10 py-5">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-red-400 mb-4">About Mocking by Jay</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
          Independent. Urban. Unapologetically Chill.
        </p>
      </section>

      {/* Story Section */}
      <section className="max-w-4xl mx-auto space-y-6 text-gray-300 leading-relaxed">
        <p>
          Hi, I’m <span className="text-white font-semibold">Jay</span>, the owner and face behind <span className="text-red-400">Mocking by Jay</span> — a record label rooted deeply in rap culture and built around individuality.
        </p>
        <p>
          We’re not just a music label. We’re a movement. Our artists don’t follow trends — they set them. Every new artist we sign brings fresh energy that redefines what Mocking by Jay stands for.
        </p>
        <p>
          We embrace change, we honor authenticity, and we build platforms for bold voices. That’s what makes us different. And that’s what makes us Mocking by Jay.
        </p>
        <p>
          Whether you're here to <span className="text-red-400">book an artist</span>, learn more about us, or explore our studio sessions — we welcome you to the family.
        </p>
      </section>

      {/* Optional: Culture Visual Section */}
      <section className="mt-16">
        <h2 className="text-2xl text-red-400 font-semibold mb-8 text-center">The Culture</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-secondaryblack-500 rounded-lg p-4 hover:bg-slate-800 transition">
            <h3 className="text-white text-xl font-bold mb-2">Diverse Talent</h3>
            <p className="text-sm text-gray-300">From street poets to trap kings — every artist has a voice that’s uniquely theirs.</p>
          </div>
          <div className="bg-secondaryblack-500 rounded-lg p-4 hover:bg-slate-800 transition">
            <h3 className="text-white text-xl font-bold mb-2">Creative Freedom</h3>
            <p className="text-sm text-gray-300">Artists aren’t boxed. They’re launched into limitless sound and style.</p>
          </div>
          <div className="bg-secondaryblack-500 rounded-lg p-4 hover:bg-slate-800 transition">
            <h3 className="text-white text-xl font-bold mb-2">Global Vision</h3>
            <p className="text-sm text-gray-300">We're not just a local label — we’re building the future of rap worldwide.</p>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <div className="mt-20 text-center">
        <p className="text-gray-400">Ready to book an artist or studio session?</p>
        <a
          href="#book"
          className="inline-block mt-4 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-medium transition"
        >
          Book Now
        </a>
      </div>
    </div>
  );
}
