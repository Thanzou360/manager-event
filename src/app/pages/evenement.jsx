// pages/events.js
import { useState } from 'react';
import Link from 'next/link';

const eventsData = [
  {
    id: 1,
    title: "Concert de Jazz",
    date: "2024-12-15",
    description: "Rejoignez-nous pour une soirée de jazz avec des artistes locaux.",
    image: "/images/jazz-concert.jpg"
  },
  {
    id: 2,
    title: "Atelier de Cuisine",
    date: "2024-12-20",
    description: "Apprenez à cuisiner des plats délicieux avec un chef professionnel.",
    image: "/images/cooking-workshop.jpg"
  },
  {
    id: 3,
    title: "Conférence sur la Technologie",
    date: "2024-12-25",
    description: "Découvrez les dernières tendances technologiques avec des experts du secteur.",
    image: "/images/tech-conference.jpg"
  },
];

const EventsPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simule l'état de connexion

  const handleCreateEvent = () => {
    if (!isLoggedIn) {
      // Redirige vers la page de connexion ou d'inscription
      window.location.href = '/login'; // Changez ceci selon votre route
    } else {
      // Logique pour créer un événement
      console.log("Créer un événement");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Événements Disponibles</h1>
      <button 
        onClick={handleCreateEvent} 
        className="mb-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Créer un Événement
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {eventsData.map(event => (
          <div key={event.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{event.title}</h2>
              <p className="text-gray-600">{event.date}</p>
              <p className="mt-2">{event.description}</p>
              <Link href={`/events/${event.id}`} className="text-blue-600 hover:underline mt-4 inline-block">
                Voir Détails
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;
