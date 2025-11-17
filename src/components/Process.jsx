import { motion } from 'framer-motion';
import { Map, Wrench, Rocket, LineChart } from 'lucide-react';

const steps = [
  {
    icon: Map,
    title: 'Discovery y Mapeo',
    desc: 'Entendemos tus procesos actuales, identificamos cuellos de botella y oportunidades de automatización con impacto.'
  },
  {
    icon: Wrench,
    title: 'Diseño de Solución',
    desc: 'Definimos la arquitectura objetivo y la pila tecnológica: agentes de IA, integraciones, orquestadores y back-office.'
  },
  {
    icon: Rocket,
    title: 'Implementación MVP',
    desc: 'Construimos un MVP funcional en semanas. Integraciones, flujos, agentes y panel de control operativos.'
  },
  {
    icon: LineChart,
    title: 'Operación y Mejora',
    desc: 'Monitoreamos, operamos y optimizamos continuamente para mejorar eficiencia y calidad de resultados.'
  }
];

export default function Process() {
  return (
    <section id="proceso" className="bg-[#0B0B0C] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-semibold"
        >
          Nuestro Proceso
        </motion.h2>
        <p className="mt-3 text-white/70 max-w-2xl">Probado en múltiples industrias para acelerar resultados sin aumentar tu estructura.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition"
            >
              <s.icon className="h-6 w-6 text-yellow-400" />
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-white/70">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
