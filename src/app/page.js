"use client";
import { useRouter } from "next/navigation";
import Navbar from "./component/navbar";
import Head from "next/head";

export default function Home() {
  const router = useRouter();

  return (
    <div className="bg-green-400 h-full w-full">
      {/* Navbar */}
      <Navbar />

      {/* Head Section */}
      <Head className="flex flex-col justify-center pl-24 w-96">
        <title>Saylani Microfinance</title>
        <meta name="description" content="Finance app homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main Content */}
      <main className="bg-gray-50 min-h-screen flex flex-col justify-between p-6">
        {/* Header */}
        <header className="text-blue-600 mb-8 text-center">
          <h1 className="text-4xl font-bold">WELCOME TO SAYLANI MICROFINANCE </h1>
          <p className="mt-2 text-xl text-gray-600">Track and manage your financial life</p>
        </header>

        {/* Quick Actions */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Wedding Loans */}
          <div className="bg-white p-6 rounded-xl shadow-lg text-center h-full flex flex-col justify-between">
            <h3 className="text-xl font-semibold text-gray-800">WEDDING LOANS</h3>
            <p className="mt-2 text-gray-600">Get financial support for your wedding expenses with flexible repayment options.</p>
            <button
              onClick={() => router.push("/Form")}
              className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-300 transition"
            >
              View
            </button>
          </div>

          {/* Home Construction Loans */}
          <div className="bg-white p-6 rounded-xl shadow-lg text-center h-full flex flex-col justify-between">
            <h3 className="text-xl font-semibold text-gray-800">HOME CONSTRUCTION LOANS</h3>
            <p className="mt-2 text-gray-600">Build your dream home with our easy-to-apply construction loans.</p>
            <button
               onClick={() => router.push("/Form")}
              className="mt-4 bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-300 transition"
            >
              View
            </button>
          </div>

          {/* Business Startup Loans */}
          <div className="bg-white p-6 rounded-xl shadow-lg text-center h-full flex flex-col justify-between">
            <h3 className="text-xl font-semibold text-gray-800">BUISNESS STARTUP LOANS</h3>
            <p className="mt-2 text-gray-600">Kickstart your business with our financial solutions designed for entrepreneurs.</p>
            <button
              onClick={() => router.push("/Form")}
              className="mt-4 bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-300 transition"
            >
              View
            </button>
          </div>

          {/* Education Loans */}
          <div className="bg-white p-6 rounded-xl shadow-lg text-center h-full flex flex-col justify-between">
            <h3 className="text-xl font-semibold text-gray-800">EDUCATION LOAN</h3>
            <p className="mt-2 text-gray-600">Pursue your education with affordable loans that fit your needs.</p>
            <button
              onClick={() => router.push("/Form")}
              className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-300 transition"
            >
              View
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-500">
          <p>&copy; 2025 Saylani Microfinance. All Rights Reserved.</p>
        </footer>
      </main>
    </div>
  );
}
