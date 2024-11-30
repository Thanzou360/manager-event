"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const InscriptionPage = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    motDePasse: "",
  });
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false); // Etat pour gérer le succès
  const router = useRouter();

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch(
        "https://gestiondeseenement-2.onrender.com/api/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setIsSuccess(true); // Mise à jour de l'état en cas de succès
      } else {
        setError(
          data.message || "Une erreur est survenue lors de l'inscription"
        );
      }
    } catch (error) {
      setError("Erreur du serveur");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Fonction pour mettre à jour l'état du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Utilisation de useEffect pour rediriger après une inscription réussie
  useEffect(() => {
    if (isSuccess) {
      // Rediriger l'utilisateur vers la page de connexion après inscription réussie
      setTimeout(() => {
        router.push("/pages/connexion");
      }, 2000); // Attendre 2 secondes avant de rediriger
    }
  }, [isSuccess, router]); // Le hook se déclenche dès que isSuccess change

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center text-2xl font-bold mb-6">Inscription</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label
            htmlFor="nom"
            className="block text-sm font-medium text-gray-700"
          >
            Nom
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            value={formData.nom}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-1 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-1 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="motDePasse"
            className="block text-sm font-medium text-gray-700"
          >
            Mot de Passe
          </label>
          <input
            type="password"
            id="motDePasse"
            name="motDePasse"
            value={formData.motDePasse}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 mt-1 border rounded-md"
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}
        {isSuccess && (
          <p className="text-green-500 text-sm">
            Inscription réussie ! Redirection...
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-purple-600 text-white py-2 mt-4 rounded hover:bg-purple-700 disabled:bg-gray-300"
        >
          {isSubmitting ? "Chargement..." : "S'inscrire"}
        </button>
      </form>
    </div>
  );
};

export default InscriptionPage;
