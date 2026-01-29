import { motion } from "framer-motion";
import { Building2, User, Phone, Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-vivapro.png";

const FooterCTA = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Main CTA Section */}
      <section className="py-24 relative">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-dark-green via-teal/20 to-dark-green" />
        
        {/* Animated sweep */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />

        <div className="container relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Title with glow */}
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-black mb-6 sm:mb-8 px-2">
              <span className="text-foreground">PRONTO PARA </span>
              <span className="text-gradient-gold animate-pulse-glow inline-block px-1 sm:px-2">REVOLUCIONAR</span>
              <br />
              <span className="text-gradient-gold">A PROTEÇÃO DA SUA CARGA?</span>
            </h2>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center mb-8 sm:mb-12 px-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto max-w-[280px] sm:max-w-none"
              >
                <Button 
                  size="lg" 
                  className="gradient-gold text-primary-foreground font-black text-xs sm:text-sm md:text-base px-4 sm:px-8 md:px-10 py-5 sm:py-6 md:py-8 animate-pulse-glow hover-shake w-full"
                  asChild
                >
                  <a 
                    href="https://wa.me/5511955952409"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Building2 className="mr-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 flex-shrink-0" />
                    <span className="truncate">🛒 COMPRE COMO EMPRESA (CNPJ)</span>
                  </a>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto max-w-[280px] sm:max-w-none"
              >
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 border-secondary bg-secondary/20 text-foreground font-bold text-xs sm:text-sm md:text-base px-4 sm:px-8 md:px-10 py-5 sm:py-6 md:py-8 hover:bg-secondary/40 hover-shake w-full"
                  asChild
                >
                  <a 
                    href="https://wa.me/5511955952409"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <User className="mr-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 flex-shrink-0" />
                    <span className="truncate">👤 COMPRE COMO PESSOA FÍSICA (CPF)</span>
                  </a>
                </Button>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <motion.a
                href="https://wa.me/5511955952409"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 glass rounded-xl hover:bg-muted/50 transition-colors"
                whileHover={{ y: -5 }}
              >
                <MessageCircle className="h-8 w-8 text-green-500" />
                <span className="text-sm text-muted-foreground">WhatsApp</span>
                <span className="font-semibold text-foreground">+55 (11) 95595-2409</span>
              </motion.a>

              <motion.a
                href="tel:+5511955952409"
                className="flex flex-col items-center gap-2 p-4 glass rounded-xl hover:bg-muted/50 transition-colors"
                whileHover={{ y: -5 }}
              >
                <Phone className="h-8 w-8 text-secondary" />
                <span className="text-sm text-muted-foreground">Telefone</span>
                <span className="font-semibold text-foreground">+55 (11) 95595-2409</span>
              </motion.a>

              <motion.a
                href="mailto:contato@vivapro.com.br"
                className="flex flex-col items-center gap-2 p-4 glass rounded-xl hover:bg-muted/50 transition-colors"
                whileHover={{ y: -5 }}
              >
                <Mail className="h-8 w-8 text-primary" />
                <span className="text-sm text-muted-foreground">E-mail</span>
                <span className="font-semibold text-foreground">contato@vivapro.com.br</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Bottom */}
      <div className="bg-background/50 border-t border-border py-8">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <img 
              src={logo} 
              alt="Vivapro Packaging" 
              className="h-10"
            />
            <p className="text-sm text-muted-foreground text-center">
              © {new Date().getFullYear()} Vivapro Packaging. Todos os direitos reservados.
            </p>
            <p className="text-sm text-muted-foreground">
              A Essência da Proteção em Movimento.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;
