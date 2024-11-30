import Image from "next/image";
import Header from "../app/components/header"
import Link from 'next/link';
import Hero from "../app/components/hero"
import Footer from "../app/components/footer"

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}
