"use client";

import { useState } from 'react';
import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import { useRouter } from 'next/router';
import Link from 'next/link';
const events = [
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
  // Ajoutez d'autres événements ici
];

const EventCard = ({ event, onViewMore }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
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

const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  

  const isAuthenticated = false; 

  const handleViewMore = (event) => {
    setSelectedEvent(event);
  };

  const handleClosePopup = () => {
    setSelectedEvent(null);
  };

  const handleCreateEvent = () => {
    if (!isAuthenticated) {
      router.push('/pages/inscription'); 
    } else {
      router.push('/create-event'); 
    }
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-6">
          <button onClick={handleCreateEvent} className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition duration-300">
            Créer un Événement
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((event) => (
            <EventCard key={event.id} event={event} onViewMore={handleViewMore} />
          ))}
        </div>

        {selectedEvent && <EventPopup event={selectedEvent} onClose={handleClosePopup} />}
      </div>
      <Footer />
    </div>
  );
};

export default EventsPage;
