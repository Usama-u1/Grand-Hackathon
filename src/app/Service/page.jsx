import Head from 'next/head';
import Navbar from '../component/navbar';

const Services = () => {
  const services = [
    { title: 'IT Training', description: 'Flexible small loans for businesses.' },
    { title: 'Financial Help', description: 'Secure savings solutions.' },
    { title: 'Financial Literacy', description: 'Workshops to improve money management.' },
    { title: 'Business Consultation', description: 'Expert advice for small businesses.' },
    { title: 'Emergency Funds', description: 'Quick access to funds in emergencies.' },
    { title: 'Community Support', description: 'Resources for local communities.' },
    { title: 'Affordable Insurance', description: 'Coverage for life and health.' },
    { title: 'Loan Restructuring', description: 'Support for flexible repayments.' },
    { title: 'Mobile Banking', description: 'Bank from anywhere at any time.' },
    { title: 'Investment Options', description: 'Grow your money wisely.' },
    { title: 'Youth Programs', description: 'Empowering the next generation.' },
    { title: 'Women Entrepreneurs', description: 'Special support for women in business.' },
  ];

  return (
    <>
    <Navbar />
      <Head>
        <title>Our Services | Microfinance App</title>
        <meta name="description" content="Discover the services we offer to support your financial needs." />
      </Head>
      <div className="relative bg-cover bg-center min-h-screen" style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRac-iF4RKkhLFbGunDWmG36ZmiMCHrIOBoIQ&s)' }}>
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-blue-600 opacity-50"></div>

        <div className="relative z-10 flex flex-col items-center justify-center text-white px-4 py-10">
          <h1 className="text-4xl font-bold mb-6">SAYLANI SERVICES</h1>
          <p className="text-lg text-center max-w-3xl mb-10">
            Saylani provide more then 63 services in many countries and 50.1 million rupeess.
          </p>

          {/* Cards Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-green-400 text-black rounded-2xl shadow-lg p-6 transition-transform transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-sm text-white">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
