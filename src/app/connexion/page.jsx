"use client";


// pages/login.js
import { useState } from 'react';
import Link from 'next/link';

const LoginPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Logique de connexion ici (API call, validation, etc.)
    console.log("Connexion réussie pour:", { name, email });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Connexion</h1>
      <form onSubmit={handleLogin} className="bg-white rounded-lg shadow-lg p-6">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
          <input
            type="text"
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Adresse Email</label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Se Connecter
        </button>
      </form>
      <div className="mt-4 text-center">
        <p className="text-sm">
          Pas encore de compte? <Link href="/signup" className="text-blue-600 hover:underline">Inscrivez-vous ici</Link>.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
