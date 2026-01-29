import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/5511955952409"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 text-white px-5 py-4 rounded-full shadow-lg hover:bg-green-600 transition-colors group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
      >
        <FaWhatsapp className="h-7 w-7" />
      </motion.div>
      <span className="hidden md:block font-semibold">
        FALE AGORA COM A VIVAPRO!
      </span>
      
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />
    </motion.a>
  );
};

export default WhatsAppButton;
