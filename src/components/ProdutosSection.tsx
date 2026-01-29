import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import productManual from "@/assets/product-stretch-manual.jpg";
import productAuto from "@/assets/product-stretch-auto.jpg";
import productColorido from "@/assets/product-stretch-colorido.jpg";
import productTubetes from "@/assets/product-termo.png";
import { FaWhatsapp } from "react-icons/fa";

const produtos = [
  {
    image: productManual,
    title: "Stretch Manual",
    description: "Agilidade e praticidade para paletização manual com máxima segurança.",
  },
  {
    image: productAuto,
    title: "Stretch Automático",
    description: "Alto rendimento e resistência para linhas de produção de alta demanda.",
  },
  {
    image: productColorido,
    title: "Stretch Colorido",
    description: "Organize, identifique e proteja com estilo e segurança extra.",
  },
  {
    image: productTubetes,
    title: "Stretch Termocontratil",
    description: "A base sólida para seus enrolados: papel, filmes, etiquetas e muito mais.",
  },
];

const ProdutosSection = () => {
  return (
    <section id="produtos" className="py-24 bg-background relative overflow-hidden">
      <div className="container relative z-10 px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ opacity: 1, clipPath: "inset(0 0 0 0)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4">
            <span className="text-gradient-gold">A COBERTURA PERFEITA</span>
            <br className="hidden md:block" />
            <span className="text-gradient-gold"> PARA CADA NECESSIDADE.</span>
          </h2>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {produtos.map((produto, index) => (
            <motion.div
              key={produto.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-card rounded-2xl overflow-hidden card-hover cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={produto.image} 
                  alt={produto.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-6 -mt-16">
                <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">
                  {produto.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {produto.description}
                </p>

                {/* Hover Arrow */}
                <motion.div
                  className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center">
                    <ArrowRight className="h-5 w-5 text-primary-foreground" />
                  </div>
                </motion.div>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="gradient-gold text-primary-foreground font-bold hover-shake"
            asChild
          >
            <a href="https://wa.me/5511955952409">
              <FaWhatsapp className=" h-10 w-10" />
              FAÇA UM ORÇAMENTO AGORA MESMO!
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProdutosSection;
