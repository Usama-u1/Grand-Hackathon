"use client";
import { useRouter } from "next/navigation";
import Navbar from "./component/navbar";
import Head from "next/head";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Head Section */}
      <Head>
        <title>Saylani Microfinance</title>
        <meta name="description" content="Finance app homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main Content */}
      <main className="bg-gray-50 min-h-screen flex flex-col justify-between p-6">
        {/* Header */}
        <header className="text-blue-600 mb-8">
          <h1 className="text-4xl font-bold">Welcome to Saylani Microfinance</h1>
          <p className="mt-2 text-xl text-gray-600">Track and manage your financial life</p>
        </header>

        {/* Quick Actions */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Wedding Loans */}
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-800">Wedding Loans</h3>
            <button
              onClick={() => router.push("/Form")}
              className="mt-4 bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-600 transition"
            >
              View
            </button>
          </div>

          {/* Home Construction Loans */}
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-800">Home Construction Loans</h3>
            <button
              onClick={() => router.push("/HomeConstructionLoans")}
              className="mt-4 bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition"
            >
              View
            </button>
          </div>

          {/* Business Startup Loans */}
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-800">Business Startup Loans</h3>
            <button
              onClick={() => router.push("/BusinessLoans")}
              className="mt-4 bg-red-500 text-white py-2 px-6 rounded-lg hover:bg-red-600 transition"
            >
              View
            </button>
          </div>

          {/* Education Loans */}
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <h3 className="text-xl font-semibold text-gray-800">Education Loans</h3>
            <button
              onClick={() => router.push("/EducationLoans")}
              className="mt-4 bg-purple-500 text-white py-2 px-6 rounded-lg hover:bg-purple-600 transition"
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

