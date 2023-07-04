import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutMe from '@/components/AboutMe';
import Portfolio from '@/components/Portfolio';
import ContactMe from '@/components/ContactMe';
import Resume from '@/components/Resume';

export default function Home() {
  return (
    <main className="flex flex-col">
        <Navbar />
        <AboutMe />
        <Portfolio />
        <ContactMe />
        <Resume />
        <Footer />
    </main>
  );
}
