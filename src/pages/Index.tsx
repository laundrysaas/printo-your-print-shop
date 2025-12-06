import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import FutureMindset from "@/components/FutureMindset";
import Products from "@/components/Products";
import Services from "@/components/Services";
import GetInTouch from "@/components/GetInTouch";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Introduction />
        <FutureMindset />
        <Products />
        <Services />
        <GetInTouch />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
