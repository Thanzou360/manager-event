"use client";

import { useState, useEffect } from "react";
import Header from "@/app/components/header";
import Footer from "@/app/components/footer";
import { useRouter } from "next/navigation"; // Importation de la version de next/navigation

const EventCard = ({ event, onViewMore }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img
      src={event.image}
      alt={event.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h2 className="text-xl font-bold">{event.title}</h2>
      <p className="text-gray-600">{event.date}</p>
      <p className="text-gray-600">{event.location}</p>
      <button
        onClick={() => onViewMore(event)}
        className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition duration-300"
      >
        Voir plus
      </button>
      
    </div>
  </div>
);

const EventsPage = () => {
  const [events, setEvents] = useState([]); // État pour stocker les événements
  const [selectedEvent, setSelectedEvent] = useState(null); // État pour l'événement sélectionné
  const [loading, setLoading] = useState(true); // État pour gérer le chargement
  const [error, setError] = useState(null); // État pour gérer les erreurs

  // Utilisation du hook useRouter pour obtenir l'objet router
  const router = useRouter();
  
  const isAuthenticated = false; // Remplacez cette variable par votre logique d'authentification

  const handleViewMore = (event) => {
    // Rediriger vers la page de détails de l'événement
    router.push(`/event/${event.id}`); // Assurez-vous que l'ID de l'événement est correct
  };

  const handleCreateEvent = () => {
    if (!isAuthenticated) {
      router.push("/pages/inscription"); // Redirige vers la page d'inscription
    } else {
      router.push("/create-event"); // Remplacez par la route de création d'événement
    }
  };

  // Effectuer le fetch des événements à partir de l'API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          "https://gestiondeseenement-2.onrender.com/api/events"
        ); // Remplacez par l'URL de votre API
        if (!response.ok) {
          throw new Error("Erreur lors de la récupération des événements");
        }
        const data = await response.json();
        console.log(data); // Affichez les données dans la console
        setEvents(data); // Mise à jour de l'état avec les événements récupérés
      } catch (error) {
        setError(error.message); // Gestion des erreurs
      } finally {
        setLoading(false); // Fin du chargement
      }
    };

    fetchEvents();
  }, []); // Le tableau vide [] signifie que l'effet se déclenche uniquement au montage du composant

  if (loading) {
    return <div>Chargement des événements...</div>;
  }

  if (error) {
    return <div>Une erreur est survenue : {error}</div>;
  }

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-6">
          <button
            onClick={handleCreateEvent}
            className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition duration-300"
          >
            Créer un Événement
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onViewMore={handleViewMore}
            />
          ))}
        </div>

        {selectedEvent && (
          <EventPopup event={selectedEvent} onClose={handleClosePopup} />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default EventsPage;
