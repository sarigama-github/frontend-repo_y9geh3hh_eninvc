import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Calendar, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-[#0B0B0C] text-white">
      {/* Navbar within Hero */}
      <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-yellow-300 to-yellow-600 shadow-lg shadow-yellow-500/30" />
          <span className="font-semibold tracking-tight text-lg">Whitelabel</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#proceso" className="hover:text-white transition">Proceso</a>
          <a href="#entregables" className="hover:text-white transition">Entregables</a>
          <a href="#casos" className="hover:text-white transition">Casos</a>
          <a href="#modelos" className="hover:text-white transition">Modelos</a>
        </nav>
        <a href="#cta" className="inline-flex items-center gap-2 bg-white text-black rounded-full px-4 py-2 text-sm font-medium shadow hover:shadow-lg transition">
          <Calendar className="h-4 w-4" />
          Agendar diagnóstico
        </a>
      </header>

      {/* Hero content */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center px-6 pt-4 pb-20 relative z-10">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight"
          >
            Escala tus procesos de negocio con
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600"> automatización inteligente</span>
            y agentes de IA, sin contratar más personal
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 text-lg text-white/70 max-w-xl"
          >
            Actuamos como tu "CAO Externo" o tu socio tecnológico white-label.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <a
              href="#cta"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-yellow-300 to-yellow-600 text-black font-semibold px-6 py-3 shadow-lg shadow-yellow-500/30"
            >
              Agendar un Diagnóstico Gratuito
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#casos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 text-white px-6 py-3 hover:bg-white/5 transition"
            >
              Ver casos de éxito
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative h-[420px] sm:h-[520px] lg:h-[620px]"
        >
          <div className="absolute inset-0 rounded-3xl overflow-hidden ring-1 ring-white/10">
            <Spline scene="https://prod.spline.design/Geb1kGWmIba9zPiH/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0B0C] via-transparent to-transparent" />
        </motion.div>
      </div>

      {/* subtle background accents */}
      <div className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-yellow-300/10 blur-3xl" />
    </div>
  );
}
