import { motion } from 'framer-motion';
import { ClipboardCheck, Boxes, Workflow, FileText } from 'lucide-react';

const items = [
  {
    icon: ClipboardCheck,
    title: 'Diagnóstico priorizado',
    desc: 'Mapa claro de iniciativas con impacto estimado y complejidad para ejecutar primero lo que más mueve la aguja.'
  },
  {
    icon: Boxes,
    title: 'Arquitectura',
    desc: 'Diseño técnico: agentes de IA, integraciones, orquestación y data layer con enfoque escalable.'
  },
  {
    icon: Workflow,
    title: 'MVP operativo con Agentes IA y back-office',
    desc: 'Primera versión en producción controlada, conectada a tus herramientas, con panel de control.'
  },
  {
    icon: FileText,
    title: 'Documentación',
    desc: 'Manual de operación, diagramas y handoff para equipos internos o partners.'
  }
];

export default function Deliverables() {
  return (
    <section id="entregables" className="bg-[#0B0B0C] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-semibold"
        >
          Entregables Clave
        </motion.h2>
        <p className="mt-3 text-white/70 max-w-2xl">Lo que te llevas en cada engagement, sin sorpresas.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm hover:bg-white/10 transition"
            >
              <it.icon className="h-6 w-6 text-yellow-400" />
              <h3 className="mt-4 text-lg font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-white/70">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
