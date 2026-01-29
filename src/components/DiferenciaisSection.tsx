import { motion } from "framer-motion";
import { Maximize2, Layers, Shield, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";

const diferenciais = [
  {
    icon: Maximize2,
    title: "Elasticidade Extrema",
    description: "Nosso filme estica mais, garantindo que sua carga fique compacta e segura sem rupturas. Menos material, mais proteção, economia real!",
    animation: "animate-spring",
  },
  {
    icon: Layers,
    title: "Aderência Superior",
    description: "A tecnologia da Vivapro garante que cada camada adere perfeitamente, criando uma barreira intransponível contra desprendimentos e avarias.",
    animation: "animate-bounce-subtle",
  },
  {
    icon: Shield,
    title: "Resistência Total",
    description: "Proteção contra furos, rasgos, poeira, umidade e até raios UV. Seus produtos intactos do nosso galpão à entrega final.",
    animation: "animate-float",
  },
];

const DiferenciaisSection = () => {
  return (
    <section className="py-24 gradient-dark relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, hsl(var(--primary)) 35px, hsl(var(--primary)) 70px)`,
        }} />
      </div>

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
            <span className="text-foreground">POR QUE O </span>
            <span className="text-gradient-gold">STRETCH VIVAPRO</span>
            <span className="text-foreground"> É A SUA MELHOR ESCOLHA?</span>
          </h2>
        </motion.div>

        {/* Diferenciais Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {diferenciais.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass rounded-2xl p-8 text-center card-hover"
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl gradient-gold mb-6 ${item.animation}`}>
                <item.icon className="h-10 w-10 text-primary-foreground" />
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-4">
            Pronto para proteger sua carga como nunca? Fale com a Vivapro!
          </p>
          <Button
            asChild
            className="gradient-teal text-foreground font-semibold hover:opacity-90"
          >
            <a
              href="https://wa.me/5511955952409"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="mr-2 h-4 w-4" />
              FALE AGORA
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default DiferenciaisSection;
