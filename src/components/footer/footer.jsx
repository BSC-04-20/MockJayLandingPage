export default function Footer() {
  return (
    <footer className="bg-secondaryblack-500 text-red-400 px-6 md:px-16 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About the Label */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Mocking by Jay</h2>
          <p className="text-sm text-gray-200 font-inter leading-relaxed">
            Mocking by Jay is an independent, urban label pushing the limits of rap. Every artist adds a new voice to our evolving identity. Stay bold, stay original — that’s the vibe.
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-3">
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="text-sm font-inter space-y-1">
            <li><a href="#book" className="hover:underline text-gray-200">Book an Artist</a></li>
            <li><a href="#artists" className="hover:underline text-gray-200">Our Artists</a></li>
            <li><a href="#studio" className="hover:underline text-gray-200">Book Studio Session</a></li>
            <li><a href="#about" className="hover:underline text-gray-200">About the Label</a></li>
          </ul>
        </div>

        {/* Contact / Vibe */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Stay in the Loop</h3>
          <p className="text-sm font-inter text-gray-200 mb-3">
            We’re always building something fresh. Drop us a line, book a beat, or just vibe with our sound.
          </p>
          <button className="mt-2 bg-red-600 font-inter hover:bg-red-700 text-white text-sm font-semibold py-2 px-4 rounded-full transition-all duration-200">
            Contact Us
          </button>
        </div>
      </div>

      <div className="border-t border-red-800 mt-12 pt-6 text-center text-sm text-red-400">
        &copy; {new Date().getFullYear()} Mocking by Jay. All rights reserved.
      </div>
    </footer>
  );
}
