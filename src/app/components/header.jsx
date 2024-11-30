"use client"
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-br from-indigo-600 to-purple-600 flex justify-between items-center p-4">
      <div className="logo">
        <img src="/logo.png" alt="Logo" className="h-12" />
      </div>
      <div className="flex items-center md:hidden">
        <button onClick={toggleSidebar} className="text-white">
          ☰
        </button>
      </div>
      <nav className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:relative md:flex md:items-center md:justify-between md:bg-transparent md:opacity-100 md:translate-x-0`}>
        <div className="flex flex-col md:flex-row md:space-x-4 p-4 md:p-0">
          <Link href={'/'} className="text-white hover:underline">Voir mes événements</Link>
          <div className="flex space-x-2 mt-4 md:mt-0">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-not-allowed" disabled>
              Connexion
            </button>
            <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 cursor-not-allowed" disabled>
              Inscription
            </button>
          </div>
        </div>
        <button onClick={toggleSidebar} className="absolute top-4 right-4 text-white md:hidden">
          ×
        </button>
      </nav>
    </header>
  );
};

export default Header;
