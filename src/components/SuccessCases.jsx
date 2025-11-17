import { motion } from 'framer-motion';

const cases = [
  {
    name: 'Acondicionando',
    summary: 'Automatización de intake de clientes y coordinación logística con agentes de IA; reducción del 60% en tiempos operativos.',
    tags: ['Agentes IA', 'Integraciones', 'RPA']
  },
  {
    name: 'Quality Academics',
    summary: 'Implementación de agente de admisiones y back-office para seguimiento; +35% en conversiones y SLA en 24h.',
    tags: ['Chat + CRM', 'Orquestación', 'Analytics']
  },
  {
    name: 'Fintech B2B (confidencial)',
    summary: 'MVP de conciliación de pagos con LLM y flujos supervisados; disminución de errores en 70%.',
    tags: ['LLM', 'Data Pipelines', 'MVP']
  }
];

export default function SuccessCases() {
  return (
    <section id="casos" className="bg-[#0B0B0C] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-semibold"
        >
          Casos de Éxito
        </motion.h2>
        <p className="mt-3 text-white/70 max-w-2xl">Resultados reales en industrias exigentes.</p>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {cases.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
            >
              <div className="text-sm text-white/60">{c.name}</div>
              <h3 className="mt-1 text-lg font-semibold">{c.summary}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {c.tags.map(t => (
                  <span key={t} className="text-xs bg-white/10 rounded-full px-2 py-1">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
