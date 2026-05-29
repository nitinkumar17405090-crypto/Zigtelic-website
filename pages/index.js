export default function ZigtelicWebsite() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 bg-gradient-to-b from-purple-900 to-black">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Zigtelic Digital Marketing
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl text-gray-300 mb-8">
          Grow Your Business With Social Media Marketing, Website Development & AI Powered Solutions.
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-2xl text-lg font-semibold shadow-lg transition">
          Get Started
        </button>
      </section>

      {/* Services */}
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-14">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Social Media Marketing",
              desc: "Instagram growth, Facebook ads, reels strategy and branding.",
            },
            {
              title: "Website Development",
              desc: "Modern responsive websites for businesses and startups.",
            },
            {
              title: "AI Automation",
              desc: "AI chatbots, automation systems and smart marketing tools.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-3xl p-8 shadow-xl hover:scale-105 transition"
            >
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-gray-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="bg-gray-950 py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">About Us</h2>
        <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">
          Zigtelic helps businesses grow online with premium digital marketing solutions. We focus on branding, social media growth, website creation and AI-powered automation.
        </p>
      </section>

      {/* Contact */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Contact Us</h2>

        <div className="bg-gray-900 rounded-3xl p-8 shadow-2xl space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-xl bg-black border border-gray-700 text-white placeholder-gray-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-xl bg-black border border-gray-700 text-white placeholder-gray-500"
          />

          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full p-4 rounded-xl bg-black border border-gray-700 text-white placeholder-gray-500"
          ></textarea>

          <button className="w-full bg-purple-600 hover:bg-purple-700 py-4 rounded-2xl text-lg font-semibold transition">
            Send Message
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500">
        © 2026 Zigtelic Digital Marketing. All Rights Reserved.
      </footer>
    </div>
  );
}