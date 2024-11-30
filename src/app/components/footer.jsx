
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold">
              MonSite
            </Link>
          </div>
          <nav className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <Link href="/about" className="hover:underline">À propos</Link>
            <Link href="/events" className="hover:underline">Événements</Link>
            <Link href="/contact" className="hover:underline">Contact</Link>
          </nav>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-gray-300">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm">© {new Date().getFullYear()} MonSite. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
