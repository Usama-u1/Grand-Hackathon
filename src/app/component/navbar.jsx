"use client"
export default function Navbar() {
    return (
      <header>
        <nav className="bg-green-400">
          <div className="flex justify-between py-2 px-6">
            <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpIHmaTHfHQ3FVanXIf8PqCvdDVDfO8cy_Dg&s" alt="logo saylani" className="h-12" />
            </div>
            <div>
          <ul className="flex space-x-8 mt-3">
            <li><a href="/" className="text-white hover:text-gray-300 font-semibold text-xl mt-12">Home</a></li>
            <li><a href="/About" className="text-white hover:text-gray-300 font-semibold text-xl mt-12">About</a></li>
            <li><a href="/Service" className="text-white hover:text-gray-300 font-semibold text-xl mt-12">Services</a></li>
            <li><a href="/Contact" className="text-white hover:text-gray-300 font-semibold text-xl mt-12">Contact</a></li>
          </ul>
          </div>
          </div>
        </nav>
      </header>
    );
  }
  