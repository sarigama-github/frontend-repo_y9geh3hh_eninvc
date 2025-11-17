import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section id="cta" className="relative bg-[#0B0B0C] text-white py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.12),transparent_60%)]" />
      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-semibold"
        >
          ¿Listo para escalar con automatización inteligente?
        </motion.h2>
        <p className="mt-3 text-white/70">Agenda un diagnóstico gratuito y te proponemos un plan de alto impacto en semanas.</p>

        <motion.a
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          href="#"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-600 text-black font-semibold px-6 py-3 shadow-lg shadow-yellow-500/30"
        >
          <Calendar className="h-5 w-5" />
          Agendar un Diagnóstico Gratuito
        </motion.a>
      </div>
    </section>
  );
}
