import Hero from './components/Hero';
import Process from './components/Process';
import Deliverables from './components/Deliverables';
import SuccessCases from './components/SuccessCases';
import WorkModels from './components/WorkModels';
import FinalCTA from './components/FinalCTA';

function App() {
  return (
    <div className="min-h-screen bg-[#0B0B0C] text-white font-[Inter,Manrope,system-ui]">
      <Hero />
      <Process />
      <Deliverables />
      <SuccessCases />
      <WorkModels />
      <FinalCTA />
      <footer className="bg-[#0B0B0C] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between text-sm text-white/60">
          <p>© {new Date().getFullYear()} Whitelabel. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <a href="#proceso" className="hover:text-white">Proceso</a>
            <a href="#entregables" className="hover:text-white">Entregables</a>
            <a href="#casos" className="hover:text-white">Casos</a>
            <a href="#modelos" className="hover:text-white">Modelos</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
