import { motion } from "framer-motion";
import { Building2, User, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo-vivapro.png";
import { FaWhatsapp } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
      </div>

      {/* Animated Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          animate={{ x: [-1000, 1000] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-2/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-secondary/30 to-transparent"
          animate={{ x: [1000, -1000] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <img 
              src={logo} 
              alt="Vivapro Packaging" 
              className="h-16 md:h-20 mx-auto"
            />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-black mb-4 sm:mb-6 leading-tight px-2"
          >
            <span className="text-gradient-gold">TODOS OS TIPOS</span>
            <br />
            <span className="text-gradient-gold">DE FILME STRETCH VOCÊ ENCONTRA AQUI</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-base md:text-lg text-primary font-medium mb-10"
          >
            Soluções de Alta Performance para sua Logística de Ponta.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-6 px-2"
          >
            <Button 
              size="lg" 
              className="gradient-gold text-primary-foreground font-bold text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 hover-shake animate-pulse-glow w-full sm:w-auto max-w-[280px] sm:max-w-none"
              asChild
            >
              <a 
                href="https://wa.me/5511955952409"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="mr-1.5 sm:mr-2 h-6 w-6 sm:h-7 sm:w-7 flex-shrink-0" />
                <span className="truncate">FAÇA UM ORÇAMENTO AGORA MESMO!</span>
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-secondary bg-secondary/20 text-foreground font-bold text-xs sm:text-sm md:text-base px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 hover:bg-secondary/40 hover-shake w-full sm:w-auto max-w-[280px] sm:max-w-none"
              asChild
            >
              <a 
                href="#produtos"
              >
                <Building2 className="mr-1.5 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                <span className="truncate">VER NOSSOS PRODUTOS</span>
              </a>
            </Button>
          </motion.div>

          {/* Support Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="text-sm text-muted-foreground"
          >
            Não perca tempo, garanta segurança acima de tudo!
          </motion.p>
        </div>
      </div>

      {/* Animated Truck */}
      <div className="absolute bottom-8 left-0 w-full overflow-hidden pointer-events-none">
        <motion.div
          className="text-primary/40"
          animate={{ x: ["-100%", "100vw"] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <Truck className="h-12 w-12" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-20 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-primary rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
