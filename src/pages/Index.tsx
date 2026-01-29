import HeroSection from "@/components/HeroSection";
import DiferenciaisSection from "@/components/DiferenciaisSection";
import ProdutosSection from "@/components/ProdutosSection";
import DepoimentosSection from "@/components/DepoimentosSection";
import FAQSection from "@/components/FAQSection";
import FooterCTA from "@/components/FooterCTA";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <HeroSection />
      <DiferenciaisSection />
      <ProdutosSection />
      <DepoimentosSection />
      <FAQSection />
      <FooterCTA />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
