"use client";

import { useState } from 'react';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import { useRouter } from 'next/navigation';

const initialEvents = [
  {
    id: 1,
    title: "Concert de Jazz",
    date: "15 Décembre 2024",
    location: "Salle de Concert, Paris",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    title: "Atelier de Peinture",
    date: "20 Décembre 2024",
    location: "Atelier d'Art, Lyon",
    image: "https://via.placeholder.com/300",
  },
];

const EventCard = ({ event, onViewMore }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
    <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h2 className="text-xl font-bold">{event.title}</h2>
      <p className="text-gray-600">{event.date}</p>
      <p className="text-gray-600">{event.location}</p>
      <button onClick={() => onViewMore(event)} className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition duration-300">
        Voir plus
      </button>
    </div>
  </div>
);

const MyEventsPage = () => {
  const router = useRouter();
  const [userEvents, setUserEvents] = useState(initialEvents); // Événements créés par l'utilisateur

  const isAuthenticated = true; // Remplacez cette variable par votre logique d'authentification

  const handleViewMore = (event) => {
    router.push(`/event/${event.id}`); // Redirection vers la page de détails de l'événement
  };

  const handleCreateEvent = () => {
    if (!isAuthenticated) {
      router.push('/pages/inscription'); // Redirige vers la page d'inscription
    } else {
      // Simuler la création d'un événement
      const newEvent = {
        id: userEvents.length + 1,
        title: `Nouvel Événement ${userEvents.length + 1}`,
        date: new Date().toLocaleDateString(),
        location: "Nouvelle Localisation",
        image: "https://via.placeholder.com/300",
      };
      setUserEvents([...userEvents, newEvent]); // Ajouter l'événement à l'état
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-6">
          <button onClick={handleCreateEvent} className="bg-purple-600 text-white px-6 py-3 rounded hover:bg-purple-700 transition duration-300">
            Créer un Événement
          </button>
        </div>
        <h2 className="text-2xl font-bold mb-4">Mes Événements</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {userEvents.map((event) => (
            <EventCard key={event.id} event={event} onViewMore={handleViewMore} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyEventsPage;
