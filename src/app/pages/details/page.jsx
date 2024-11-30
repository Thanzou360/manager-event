"use client";

import { useState } from 'react';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import { useRouter } from 'next/router';

const EventDetailsPage = ({ event }) => {
  const [isRegistered, setIsRegistered] = useState(false);
  const router = useRouter();

  const handleRegister = () => {
    // Logique pour s'inscrire à l'événement
    setIsRegistered(true);
    console.log("Inscription réussie pour l'événement :", event.title);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6 text-purple-600">{event.title}</h1>
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto">
          <img src={event.image} alt={event.title} className="w-full h-48 object-cover rounded-md mb-4" />
          <p className="text-gray-700 font-semibold">Date : {new Date(event.date).toLocaleDateString()}</p>
          <p className="text-gray-700 font-semibold">Lieu : {event.location}</p>
          <p className="text-gray-700 mt-4">{event.description}</p>
          
          <div className="mt-6 text-center">
            {!isRegistered ? (
              <button
                onClick={handleRegister}
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-300 font-semibold"
              >
                S'inscrire à cet Événement
              </button>
            ) : (
              <p className="text-green-600 font-semibold">Inscription réussie !</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// Exemple d'événement (à remplacer par des données réelles)
export const getStaticProps = async () => {
  const event = {
    title: "Concert de Jazz",
    date: "2024-12-15T20:00:00Z",
    location: "Salle de Concert, Paris",
    image: "https://example.com/concert.jpg",
    description: "Venez profiter d'une soirée inoubliable avec des musiciens de jazz renommés.",
  };

  return {
    props: {
      event,
    },
  };
};

export default EventDetailsPage;
