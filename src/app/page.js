"use client"
import Navbar from '@/components/Navbar';
import AboutMe from '@/components/AboutMe';
import Portfolio from '@/components/Portfolio';
import ContactMe from '@/components/ContactMe';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="flex flex-col">
        <Navbar />
        <AboutMe />
        <Portfolio />
        <ContactMe />
        <Footer />
    </main>
  );
}
