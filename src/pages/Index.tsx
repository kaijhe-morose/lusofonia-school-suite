
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CountryFeatures from "@/components/CountryFeatures";
import ExtraFeatures from "@/components/ExtraFeatures";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import CallToAction from "@/components/CallToAction";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <CountryFeatures />
        <ExtraFeatures />
        <Pricing />
        <Testimonials />
        <CallToAction />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
