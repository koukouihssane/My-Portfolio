import ContactCard from "./components/ContactCard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Spacing from "./components/Spacing";
import StatusSection from "./components/StatusSection";

export default function Home() {
  return (
    <main>
      <Header />
      <Spacing size="md" />
      <Hero />
      <Spacing size="sm" />
      <StatusSection />
      <Spacing size="sm" />
      <ContactCard />
      <Spacing size="sm" />
      <Footer />
    </main>
  );
}
