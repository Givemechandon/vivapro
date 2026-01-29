import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

const depoimentos = [
  {
    text: "O stretch da Vivapro mudou nossa logística. Qualidade inquestionável! A elasticidade é impressionante.",
    author: "Carlos Silva",
    company: "Transportadora Rápido Sul",
    rating: 5,
  },
  {
    text: "Atendimento rápido e produtos que realmente cumprem o que prometem. Recomendamos a todos!",
    author: "Maria Santos",
    company: "Indústria Metalúrgica ABC",
    rating: 5,
  },
  {
    text: "Usamos o stretch colorido para identificação de lotes. Excelente qualidade e cores vibrantes!",
    author: "João Oliveira",
    company: "Distribuidora Centro-Oeste",
    rating: 5,
  },
  {
    text: "Parceria de anos! Os tubetes têm qualidade superior, suportam muito peso sem deformar.",
    author: "Ana Paula",
    company: "Gráfica Express Print",
    rating: 5,
  },
];

const DepoimentosSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container relative z-10 px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            <span className="text-foreground">QUEM ESCOLHE VIVAPRO, </span>
            <br className="hidden md:block" />
            <span className="text-gradient-gold">ESCOLHE SEGURANÇA E PARCERIA.</span>
          </h2>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-6xl mx-auto mb-12 overflow-hidden">
          <motion.div
            className="flex gap-6"
            animate={{ x: [0, -50 + "%"] }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear",
              repeatType: "loop"
            }}
          >
            {[...depoimentos, ...depoimentos].map((depo, index) => (
              <motion.div
                key={index}
                className="min-w-[350px] md:min-w-[400px] glass rounded-2xl p-8"
              >
                {/* Quote Icon */}
                <Quote className="h-10 w-10 text-primary/30 mb-4" />

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: depo.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-primary fill-primary" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-foreground mb-6 leading-relaxed">
                  "{depo.text}"
                </p>

                {/* Author */}
                <div className="border-t border-border pt-4">
                  <p className="font-bold text-foreground">{depo.author}</p>
                  <p className="text-sm text-muted-foreground blur-sm select-none">
                    {depo.company}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button 
            size="lg"
            className="gradient-gold text-primary-foreground font-bold hover-shake"
            asChild
          >
            <a href="https://wa.me/5511955952409">
              <FaWhatsapp className="h-10 w-10" />
              FALE AGORA COM A VIVAPRO!
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default DepoimentosSection;
