import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-br from-indigo-600 to-purple-600 text-white py-20">
      <div className="absolute inset-0 h-full w-full">
        <Image
          src="/back.png" 
          alt="Background"
          layout="fill"
          className="object-cover opacity-30"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Organisez vos événements en toute simplicité
          </h1>
          <p className="text-lg md:text-xl mb-8 text-indigo-100">
            Créez, gérez et partagez vos événements en quelques clics. Une solution complète pour tous vos besoins d'organisation.
          </p>
          <div className="flex flex-col md:flex-row justify-center">
            <Link href="/pages/event" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Découvrir les événements
            </Link>
          </div>
        </div>

        {/* Nouvelle div pour les images des fonctionnalités */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center transform transition-transform duration-300 hover:scale-110">
            <div className="bg-white/10 w-full h-auto flex items-center justify-center mx-auto mb-4">
              <Image
                src="/gestion.png" 
                alt="Gestion simplifiée"
                width={300}
                height={200}
                className="w-full h-auto"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Gestion simplifiée</h3>
            <p className="text-indigo-100">Créez et gérez vos événements en quelques minutes</p>
          </div>
          <div className="text-center transform transition-transform duration-300 hover:scale-110">
            <div className="bg-white/10 w-full h-auto flex items-center justify-center mx-auto mb-4">
              <Image
                src="/collaboration.png" 
                alt="Collaboration"
                width={300}
                height={200}
                className="w-full h-auto"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
            <p className="text-indigo-100">Invitez des participants et gérez les inscriptions</p>
          </div>
          <div className="text-center transform transition-transform duration-300 hover:scale-110">
            <div className="bg-white/10 w-full h-auto flex items-center justify-center mx-auto mb-4">
              <Image
                src="/event.png" 
                alt="Événements publics"
                width={300}
                height={200}
                className="w-full h-auto"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">Événements publics</h3>
            <p className="text-indigo-100">Partagez vos événements avec le monde entier</p>
          </div>
        </div>
      </div>
    </div>
  );
}
