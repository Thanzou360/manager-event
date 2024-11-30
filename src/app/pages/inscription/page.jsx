"use client";

import Header from '@/app/components/header';
import { useState } from 'react';
import Link from 'next/link';
import Footer from '@/app/components/footer';
import { useRouter } from 'next/navigation'; 

const SignupPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); 

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Inscription réussie pour:", { name, email, password });
    
    router.push('/pages/event');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Header />
      <h1 className="text-3xl font-bold mb-6 text-center text-purple-600">Créer un Compte</h1>
      <form onSubmit={handleSignup} className="bg-white rounded-lg shadow-lg p-6 md:max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom</label>
          <input
            type="text"
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-full border text-black border-gray-300 rounded-md shadow-sm p-2 focus:ring-purple-500 focus:border-purple-500"
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
            className="mt-1 block w-full border text-black border-gray-300 rounded-md shadow-sm p-2 focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Mot de Passe</label>
          <input
            type="password"
            id="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
        <button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition duration-300">
          S'inscrire
        </button>
      </form>
      <div className="mt-4 text-center">
        <p className="text-sm">
          Déjà un compte? <Link href="/pages/connexion" className="text-purple-600 hover:underline">Connectez-vous ici</Link>.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default SignupPage;
