"use client";

import Header from '@/app/components/header';
import Footer from '@/app/components/footer';

const EventDetailsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-purple-600">Concert de Jazz</h1>
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
          <img src="https://example.com/concert.jpg" alt="Concert de Jazz" className="w-full h-48 object-cover rounded-md mb-4" />
          <p className="text-gray-700 font-semibold">Date : 15 décembre 2024</p>
          <p className="text-gray-700 font-semibold">Lieu : Salle de Concert, Paris</p>
          <p className="text-gray-700 mt-4">Venez profiter d'une soirée inoubliable avec des musiciens de jazz renommés.</p>
          
          <div className="mt-6 text-center">
            <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300 font-semibold">
              S'inscrire à cet Événement
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventDetailsPage;
