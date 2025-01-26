"use client"
import Navbar from "../component/navbar"
export default function Contact() {
    return(
        <div className="Contact">
            <Navbar />
            <div className="relative bg-cover bg-center min-h-screen" style={{ backgroundImage: 'url(data:image/png;base64,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)' }}>
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-blue-800 opacity-50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-white px-4 py-16">
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-center max-w-2xl mb-10">
            Have questions or need assistance? Feel free to reach out to us. Our team is here to help you.
          </p>

          {/* Contact Form */}
          <form className="bg-white text-black rounded-2xl shadow-lg p-8 w-full max-w-lg">
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your full name"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring focus:ring-blue-500 outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring focus:ring-blue-500 outline-none"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Enter your message"
                rows="5"
                className="w-full p-3 rounded-lg border border-gray-300 focus:ring focus:ring-blue-500 outline-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
            
            <h1>Contact</h1>
        </div>
    )
}