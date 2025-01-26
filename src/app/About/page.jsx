"use client"
import Navbar from "../component/navbar"
export default function About() {
    return(
        <div className="about">
            <Navbar />
            <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTqDsGoIPZRroa0ApQ6B0Apnlp98QrtxrARA&s)' }}>
        <div className="absolute inset-0 bg-blue-800 opacity-40"></div>
        <div className="relative z-10 flex items-center justify-center text-center text-white h-full px-4">
          <div>
            <h1 className="text-4xl font-bold mb-4">About Us</h1>
            <p className="mb-6 text-lg">
              Welcome to our Microfinance App! We are committed to providing financial
              solutions to underserved communities, empowering individuals and small businesses
              with access to microloans. Our goal is to promote financial inclusion and help
              people achieve their dreams, regardless of their financial background.
            </p>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="mb-6">
              Our mission is to facilitate financial freedom for individuals and businesses in
              need. We offer simple, flexible, and affordable microloans to those who need it
              most. Whether you're starting a business or need assistance with personal
              finances, we are here to help.
            </p>
            <h2 className="text-2xl font-semibold mb-4">How We Help</h2>
            <ul className="list-disc list-inside mb-6">
              <li>Quick and easy access to loans</li>
              <li>Affordable interest rates</li>
              <li>Simple and transparent loan terms</li>
              <li>Accessible financial resources and education</li>
            </ul>
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <p>
              We believe in transparency, trust, and accessibility. Our services are designed
              to meet the needs of those who are often excluded from traditional banking
              services. We are committed to making a positive impact in the communities we serve.
            </p>
          </div>
        </div>
      </div>
        </div>
    )
}




