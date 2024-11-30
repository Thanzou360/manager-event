"use client";
import Header from '@/app/components/header';
import { useState } from 'react';
import Link from 'next/link';
import Footer from '@/app/components/footer';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Connexion réussie pour:", { email, password });
  };

  return (
    <div className="container mx-auto px-4 py-8">
        <Header/>

      <h1 className="text-3xl font-bold mb-6 text-center text-purple-600">Se Connecter</h1>
      <form onSubmit={handleLogin} className="bg-white rounded-lg shadow-lg p-6 md:max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Adresse Email</label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-purple-500 focus:border-purple-500"
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
          Se Connecter
        </button>
      </form>
      <div className="mt-4 text-center">
        <p className="text-sm">
          Pas encore de compte? <Link href="/pages/inscription" className="text-purple-600 hover:underline">Inscrivez-vous ici</Link>.
        </p>
      </div>
      <Footer/>
    </div>
  );
};

export default LoginPage;