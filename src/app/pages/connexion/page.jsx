"use client";
import Header from "@/app/components/header";
import { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "@/app/components/footer";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [motDePasse, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  // Effet secondaire avec useEffect : vérification si l'utilisateur est déjà connecté
  useEffect(() => {
    const token = localStorage.getItem("token"); // Par exemple, si vous avez un token JWT dans localStorage
    if (token) {
      // Si un token existe, rediriger l'utilisateur vers la page d'accueil ou tableau de bord
      router.push("/dashboard");
    }
  }, [router]);

  const handleLogin = async (e) => {
    e.preventDefault();
  
    const loginData = { email, motDePasse };
  
    try {
      setLoading(true);
      setError(""); // Réinitialisation de l'erreur
  
      // Envoi de la requête POST à l'API
      const response = await fetch("https://gestiondeseenement-2.onrender.com/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData), // Envoi de l'email et du mot de passe
      });
  
      // Si la réponse n'est pas OK, on affiche le message d'erreur
      if (!response.ok) {
        // Tentons de lire le message d'erreur détaillé retourné par l'API
        const errorData = await response.json();
        throw new Error(`Erreur: ${response.status} - ${errorData.message || 'Erreur inconnue'}`);
      }
  
      // Traitement de la réponse API en cas de succès
      const data = await response.json();
      console.log("Connexion réussie:", data);
      localStorage.setItem("token", data.token); // Exemple de stockage du token JWT
      router.push("/dashboard");
    } catch (err) {
      setError(err.message || "Une erreur est survenue");
      console.error("Erreur lors de la connexion:", err);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div className="container mx-auto px-4 py-8">
      <Header />

      <h1 className="text-3xl font-bold mb-6 text-center text-purple-600">
        Se Connecter
      </h1>
      <form
        onSubmit={handleLogin}
        className="bg-white rounded-lg shadow-lg p-6 md:max-w-md mx-auto"
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Adresse Email
          </label>
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
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Mot de Passe
          </label>
          <input
            type="motDePasse"
            id="motDePasse"
            required
            value={motDePasse}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition duration-300"
          disabled={loading}
        >
          {loading ? "Chargement..." : "Se Connecter"}
        </button>
      </form>

      {error && (
        <div className="mt-4 text-center text-red-600">
          <p>{error}</p>
        </div>
      )}

      <div className="mt-4 text-center">
        <p className="text-sm">
          Pas encore de compte?{" "}
          <Link
            href="/pages/inscription"
            className="text-purple-600 hover:underline"
          >
            Inscrivez-vous ici
          </Link>
          .
        </p>
      </div>

      <Footer />
    </div>
  );
};

export default LoginPage;
