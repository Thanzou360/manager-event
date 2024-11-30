"use client";

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  // Simuler l'état de connexion de l'utilisateur
  const isLoggedIn = false; // Remplacez par votre logique d'authentification

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleProfilePopup = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <header className="bg-gradient-to-br from-indigo-600 to-purple-600 flex justify-between items-center p-4">
      <div className="logo">
        <img src="/logo.png" alt="Logo" className="h-12 w-full" />
      </div>
      <div className="flex items-center md:hidden">
        <button onClick={toggleSidebar} className="text-white">
          ☰
        </button>
      </div>
      <nav className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:relative md:flex md:items-center md:justify-between md:bg-transparent md:opacity-100 md:translate-x-0`}>
        <div className="flex flex-col md:flex-row md:space-x-8 p-4 md:p-0">
          <Link href="/" className="text-white text-lg hover:underline">Accueil</Link>
          <Link href="/pages/event" className="text-white text-lg hover:underline">Voir les événements</Link>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {!isLoggedIn ? (
              <>
                <Link href="/pages/connexion">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
                    Connexion
                  </button>
                </Link>
                <Link href="/pages/inscription">
                  <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200">
                    Inscription
                  </button>
                </Link>
              </>
            ) : (
              <button onClick={toggleProfilePopup} className="text-white text-lg hover:underline">
                Mon Profil
              </button>
            )}
          </div>
        </div>
        <button onClick={toggleSidebar} className="absolute top-4 right-4 text-white md:hidden">
          ×
        </button>
      </nav>

      {/* Popup Profil */}
      {isProfileOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-60 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-lg font-bold mb-4">Mon Profil</h2>
            <Link href="/pages/event" className="block text-blue-500 hover:underline mb-2">Voir mes événements</Link>
            <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200" onClick={() => alert('Déconnexion')}>
              Se déconnecter
            </button>
            <button onClick={toggleProfilePopup} className="mt-4 text-gray-500 hover:underline">Fermer</button>
          </div>
        </div>
      )}

      {/* Sidebar Mobile */}
      {isOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50 flex flex-col items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-3/4">
            <h2 className="text-lg font-bold mb-4">Menu</h2>
            <Link href="/" className="block text-blue-500 hover:underline mb-2">Accueil</Link>
            <Link href="/pages/event" className="block text-blue-500 hover:underline mb-2">Voir les événements</Link>
            {!isLoggedIn ? (
              <>
                <Link href="/pages/connexion" className="block mb-2">
                  <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200">
                    Connexion
                  </button>
                </Link>
                <Link href="/pages/inscription" className="block mb-2">
                  <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition duration-200">
                    Inscription
                  </button>
                </Link>
              </>
            ) : (
              <>
                <button onClick={toggleProfilePopup} className="block text-blue-500 hover:underline mb-2">
                  Mon Profil
                </button>
                <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition duration-200" onClick={() => alert('Déconnexion')}>
                  Se déconnecter
                </button>
              </>
            )}
            <button onClick={toggleSidebar} className="mt-4 text-gray-500 hover:underline">Fermer</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
