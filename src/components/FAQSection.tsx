import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Qual a diferença entre o stretch virgem e o reciclado?",
    answer: "O stretch virgem oferece maior transparência e elasticidade, ideal para produtos que exigem visibilidade. O reciclado, feito com material pós-consumo, é uma opção sustentável e econômica com excelente performance para a maioria das aplicações.",
  },
  {
    question: "Vocês entregam em outras cidades além de Várzea Paulista?",
    answer: "Sim! Atendemos toda a região metropolitana de Campinas, Jundiaí e outras cidades próximas. Consulte nossa equipe para prazos e condições de entrega.",
  },
  {
    question: "Como faço para saber a micragem ideal para minha carga?",
    answer: "Nossa equipe de especialistas está pronta para ajudar! Entre em contato e, com base no tipo e peso da sua carga, indicaremos a melhor solução para você.",
  },
  {
    question: "Vocês trabalham com vendas para pessoa física (CPF)?",
    answer: "Sim! Atendemos tanto empresas (CNPJ) quanto pessoas físicas (CPF). Temos quantidades mínimas adaptadas para cada tipo de cliente.",
  },
  {
    question: "Qual é o prazo de entrega?",
    answer: "Para a região de Várzea Paulista e cidades próximas, normalmente entregamos em 24 a 48 horas úteis. Para outras regiões, o prazo varia conforme a distância. Consulte-nos!",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 gradient-dark relative overflow-hidden">
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
            <span className="text-foreground">SUAS DÚVIDAS? </span>
            <span className="text-gradient-gold">NÓS RESPONDEMOS AGORA!</span>
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass rounded-xl border-none px-6"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold hover:text-primary py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-4">
            Ainda com dúvidas? Fale com a gente e tenha um atendimento personalizado!
          </p>
          <Button 
            size="lg"
            className="gradient-teal text-foreground font-bold"
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

export default FAQSection;
