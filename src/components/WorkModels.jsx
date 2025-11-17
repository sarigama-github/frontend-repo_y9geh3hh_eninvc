import { motion } from 'framer-motion';
import { Repeat, Layers, Handshake } from 'lucide-react';

const models = [
  {
    icon: Repeat,
    title: 'Membresía / Retainer',
    desc: 'Equipo dedicado para operar y mejorar continuamente tus automatizaciones y agentes de IA.'
  },
  {
    icon: Layers,
    title: 'Proyectos por Fase',
    desc: 'Ejecución por etapas: diagnóstico, diseño, MVP y escalamiento con hitos claros.'
  },
  {
    icon: Handshake,
    title: 'White-label',
    desc: 'Nos integramos con tu marca para entregar como partner tecnológico de forma discreta.'
  }
];

export default function WorkModels() {
  return (
    <section id="modelos" className="bg-[#0B0B0C] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-semibold"
        >
          Modelos de Trabajo
        </motion.h2>
        <p className="mt-3 text-white/70 max-w-2xl">Tres vías para empezar según tu contexto y urgencia.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {models.map((m, i) => (
            <motion.div
              key={m.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
            >
              <m.icon className="h-6 w-6 text-yellow-400" />
              <h3 className="mt-4 text-lg font-semibold">{m.title}</h3>
              <p className="mt-2 text-sm text-white/70">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
