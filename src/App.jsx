import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import perfilImg from './assets/perfil.png';
import BackgroundCode from './components/BackgroundCode';

// --- COMPONENTES DAS ANIMAÇÕES DOS PROJETOS ---

const AnimEstatistica = () => (
  <div className="w-full h-32 bg-slate-950/60 rounded-xl border border-white/10 p-4 flex items-end justify-around relative overflow-hidden my-4">
    <div className="absolute top-2 left-3 text-xs font-mono text-blue-400">STATUS: PROCESSING_DATA...</div>
    {[40, 75, 50, 90, 65, 85].map((height, i) => (
      <motion.div
        key={i}
        className="w-6 bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-md"
        initial={{ height: "10%" }}
        animate={{ height: [`${height / 2}%`, `${height}%`, `${height / 3}%`, `${height}%`] }}
        transition={{ repeat: Infinity, duration: 2 + i * 0.3, ease: "easeInOut" }}
      />
    ))}
  </div>
);

const AnimImproveImage = () => (
  <div className="w-full h-32 bg-slate-950/60 rounded-xl border border-white/10 relative overflow-hidden my-4 flex items-center justify-center">
    <div className="absolute inset-0 flex items-center justify-center text-4xl filter blur-sm opacity-50 select-none">
      🖼️ RESTORE_IMG
    </div>
    
    <motion.div
      className="absolute inset-y-0 left-0 bg-blue-500/20 border-r-2 border-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] flex items-center justify-center overflow-hidden"
      animate={{ width: ["0%", "100%", "0%"] }}
      transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
    >
      <div className="text-4xl filter none opacity-100 select-none whitespace-nowrap px-8">
        🖼️ RESTORE_IMG
      </div>
    </motion.div>
  </div>
);

const AnimMoverPasta = () => (
  <div className="w-full h-32 bg-slate-950/60 rounded-xl border border-white/10 p-4 flex items-center justify-between relative overflow-hidden my-4 px-8">
    <div className="flex flex-col items-center">
      <span className="text-3xl">📁</span>
      <span className="text-[10px] font-mono text-slate-400 mt-1">/origem</span>
    </div>

    <motion.div
      className="px-3 py-1 bg-blue-600/80 border border-blue-400 rounded-md text-xs font-mono shadow-[0_0_10px_rgba(37,99,235,0.6)] flex items-center gap-1"
      animate={{ x: [-80, 80], opacity: [0, 1, 1, 0] }}
      transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
    >
      📄 data.json
    </motion.div>

    <div className="flex flex-col items-center">
      <span className="text-3xl">📂</span>
      <span className="text-[10px] font-mono text-slate-400 mt-1">/destino</span>
    </div>
  </div>
);

const AnimAPI = () => (
  <div className="w-full h-32 bg-slate-950/60 rounded-xl border border-white/10 p-4 flex items-center justify-between relative overflow-hidden my-4 px-6 font-mono text-xs">
    <div className="p-2 bg-slate-800 rounded border border-white/10 text-center">
      CLIENTE
    </div>

    <div className="relative flex-1 mx-4 flex items-center justify-center">
      <div className="w-full h-[2px] bg-slate-700 absolute"></div>
      <motion.div
        className="px-2 py-0.5 bg-emerald-500 text-slate-950 font-bold rounded text-[10px] z-10 shadow-[0_0_10px_rgba(16,185,129,0.8)]"
        animate={{ x: [-60, 60], scale: [0.8, 1, 0.8] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        GET /200 OK
      </motion.div>
    </div>

    <div className="p-2 bg-slate-800 rounded border border-white/10 text-center">
      SERVER
    </div>
  </div>
);

const AnimSFB = () => {
  const [text, setText] = useState("");
  const fullText = "PRODUTO: Código 104 - R$ 45,00 [CADASTRADO]";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index));
      index = (index + 1) % (fullText.length + 5);
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-32 bg-slate-950/60 rounded-xl border border-white/10 p-4 flex items-center relative overflow-hidden my-4 font-mono text-xs text-green-400">
      <span className="mr-2">&gt;</span>
      <span>{text}</span>
      <motion.span
        animate={{ opacity: [0, 1] }}
        transition={{ repeat: Infinity, duration: 0.5 }}
        className="w-2 h-4 bg-green-400 ml-1 inline-block"
      />
    </div>
  );
};

const AnimCocoR = () => (
  <div className="w-full h-32 bg-slate-950/60 rounded-xl border border-white/10 p-4 flex flex-col justify-center relative overflow-hidden my-4 font-mono text-[11px] text-purple-300">
    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 3 }}>
      <p><span className="text-blue-400">def</span> <span className="text-yellow-300">process_data</span>(payload):</p>
      <p className="ml-4 text-slate-400"># Otimização de algoritmo</p>
      <p className="ml-4"><span className="text-purple-400">return</span> [x * 2 <span className="text-purple-400">for</span> x <span className="text-purple-400">in</span> payload]</p>
    </motion.div>
  </div>
);

// --- LISTA DE PROJETOS ---
const projetos = [
  {
    id: 1,
    titulo: "SFB - Frente de Balcão",
    descricao: "Sistema completo para cadastro de produtos, fornecedores e clientes. Conta com histórico individual, análise estatística de vendas e salvamento local com backup automático em nuvem.",
    componenteAnimacao: <AnimSFB />,
    tags: ["Python", "PostgreSQL", "VS Code"],
    link: "https://github.com/emersonoliveira-WD/SFB"
  },
  {
    id: 2,
    titulo: "Calculadora Estatística",
    descricao: "Software em Python e scripts em Google Apps Script/Planilhas para processar dados em massa, executar cálculos estatísticos automáticos e gerar visualizações intuitivas.",
    componenteAnimacao: <AnimEstatistica />,
    tags: ["Python", "JavaScript", "Google Apps Script"],
    link: "https://github.com/emersonoliveira-WD/estatistica"
  },
  {
    id: 3,
    titulo: "Improve Image",
    descricao: "Projeto focado em melhoria, processamento e restauração visual de imagens, utilizando algoritmos otimizados para aprimoramento de resolução e qualidade.",
    componenteAnimacao: <AnimImproveImage />,
    tags: ["Python", "Processamento de Imagem"],
    link: "https://github.com/emersonoliveira-WD/improve-image"
  },
  {
    id: 4,
    titulo: "Automação Mover Pasta",
    descricao: "Script desenvolvido para automação de tarefas de infraestrutura e organização de arquivos, facilitando a movimentação e estruturação de diretórios no sistema.",
    componenteAnimacao: <AnimMoverPasta />,
    tags: ["Python", "Automação", "OS"],
    link: "https://github.com/emersonoliveira-WD/Mover-Pasta"
  },
  {
    id: 5,
    titulo: "API Mensalistas",
    descricao: "API para gerenciamento e integração de dados de mensalistas. Permite controle de acessos, registros de histórico e consumo simplificado de endpoints.",
    componenteAnimacao: <AnimAPI />,
    tags: ["API Rest", "Backend", "Node / Python"],
    link: "https://github.com/emersonoliveira-WD/Api---Mensalistas"
  },
  {
    id: 6,
    titulo: "CocoR",
    descricao: "Repositório com soluções e algoritmos para processamento e análise de dados específicos, aplicando conceitos avançados de lógica e estrutura de código.",
    componenteAnimacao: <AnimCocoR />,
    tags: ["Algoritmos", "Data Processing"],
    link: "https://github.com/emersonoliveira-WD/CocoR"
  }
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projetos.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projetos.length) % projetos.length);
  };

  const getRelativeIndex = (index) => {
    let diff = index - currentIndex;
    let half = Math.floor(projetos.length / 2);
    if (diff > half) diff -= projetos.length;
    if (diff < -half) diff += projetos.length;
    return diff;
  };

  return (
    <div className="w-full relative">
      {/* Fundo Animado */}
      <BackgroundCode />
      
      {/* MENU SUPERIOR */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-4 md:px-12 py-4 md:py-6 bg-slate-950/80 backdrop-blur-md md:bg-transparent">
        <div className="text-xl md:text-3xl font-bold tracking-wider drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
          EMERSON<span className="text-blue-400">.DEV</span>
        </div>
        
        <div className="flex gap-3 md:gap-8 items-center text-sm md:text-xl font-semibold">
          <a href="#inicio" className="hover:text-blue-400 transition-all">Início</a>
          <a href="#projetos" className="hover:text-blue-400 transition-all">Projetos</a>
          <a href="#sobre" className="hover:text-blue-400 transition-all">Sobre</a>
          <a 
            href="https://github.com/emersonoliveira-WD/meu-portfolio" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition-all hidden sm:inline"
          >
            Git
          </a>
          <a 
            href="#contato" 
            className="px-3 md:px-6 py-1.5 md:py-2 bg-blue-600 hover:bg-blue-500 rounded-full transition-all text-xs md:text-base shadow-[0_0_15px_rgba(37,99,235,0.6)]"
          >
            Contato
          </a>
        </div>
      </nav>

      {/* TELA INICIAL (HERO) */}
      <section id="inicio" className="min-h-screen w-full flex flex-col justify-center items-center relative bg-transparent snap-center snap-always px-4 md:px-16 pt-24 md:pt-0 z-10">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center z-10">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left order-2 md:order-1"
          >
            <span className="text-blue-400 font-semibold tracking-widest uppercase mb-2 block text-sm md:text-xl">Engenheiro de Computação</span>
            <h1 className="text-4xl md:text-7xl font-extrabold mb-4 md:mb-6 tracking-tight drop-shadow-lg">
              Emerson <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Oliveira</span>
            </h1>
            <p className="text-base md:text-xl text-slate-300 mb-6 md:mb-8 leading-relaxed">
              Desenvolvimento de Software, Automação em Python, Integração de APIs e Soluções de Infraestrutura de TI.
            </p>
            
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="#projetos" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl transition-all font-medium text-sm md:text-base shadow-[0_0_15px_rgba(37,99,235,0.4)]">
                Ver Projetos
              </a>
              <a href="#contato" className="px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-all font-medium text-sm md:text-base">
                Contato
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center items-center order-1 md:order-2"
          >
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative group cursor-pointer"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative w-48 h-48 md:w-80 md:h-80 rounded-full p-2 bg-slate-900/80 border-2 border-blue-400/50 backdrop-blur-md overflow-hidden shadow-2xl flex items-center justify-center">
                <img 
                  src={perfilImg} 
                  alt="Emerson Oliveira" 
                  className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/300?text=Sua+Foto";
                  }}
                />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* SEÇÃO DE PROJETOS - CARROSSEL COM ANIMAÇÕES */}
      <section id="projetos" className="min-h-screen w-full bg-transparent flex flex-col items-center justify-center relative overflow-hidden snap-center snap-always py-20 md:py-0 z-10">
        
        <button 
          onClick={prevProject} 
          className="absolute left-2 md:left-10 z-30 p-2 md:p-4 rounded-full bg-slate-900/80 border border-white/20 hover:bg-slate-800 backdrop-blur-md text-white transition-all cursor-pointer shadow-lg"
        >
          <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
        </button>

        <button 
          onClick={nextProject} 
          className="absolute right-2 md:right-10 z-30 p-2 md:p-4 rounded-full bg-slate-900/80 border border-white/20 hover:bg-slate-800 backdrop-blur-md text-white transition-all cursor-pointer shadow-lg"
        >
          <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
        </button>

        <div className="relative w-full max-w-5xl h-[600px] md:h-[68vh] flex items-center justify-center">
          {projetos.map((projeto, i) => {
            const relIndex = getRelativeIndex(i);
            const isCenter = relIndex === 0;
            const x = isCenter ? "0%" : relIndex === 1 ? "85%" : relIndex === -1 ? "-85%" : relIndex > 1 ? "150%" : "-150%";
            const scale = isCenter ? 1 : 0.75;
            const opacity = isCenter ? 1 : Math.abs(relIndex) === 1 ? 0.2 : 0;
            const zIndex = isCenter ? 20 : 10;

            return (
              <motion.div
                key={projeto.id}
                animate={{ x, scale, opacity, zIndex }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                className="absolute w-[85%] md:w-[90%] max-w-2xl h-full flex flex-col justify-between p-6 md:p-8 rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
                style={{ pointerEvents: isCenter ? "auto" : "none" }}
              >
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">{projeto.titulo}</h3>
                  <div className="w-12 md:w-16 h-1 bg-blue-500 rounded-full mb-3"></div>
                  
                  {projeto.componenteAnimacao}

                  <p className="text-xs md:text-base text-slate-200 leading-relaxed mb-4">
                    {projeto.descricao}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {projeto.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 md:px-3 py-1 bg-white/10 text-blue-300 text-xs rounded-md border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a 
                  href={projeto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start mt-2 px-6 md:px-8 py-2.5 md:py-3 rounded-xl bg-blue-600/90 hover:bg-blue-600 border border-blue-400/30 transition-all text-sm md:text-base font-medium flex items-center gap-2 group shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                >
                  Ver no GitHub
                  <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* SEÇÃO SOBRE MIM */}
      <section id="sobre" className="min-h-screen w-full bg-transparent flex flex-col items-center justify-center snap-center snap-always px-4 md:px-6 py-20 md:py-0 z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-10 text-slate-100 drop-shadow-md">Sobre Mim</h2>
        
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-slate-900/80 p-6 md:p-8 rounded-3xl backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
            <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-3 md:mb-4">Formação & Trajetória</h3>
            <p className="text-sm md:text-base text-slate-300 mb-4 leading-relaxed">
              Bacharel em <strong className="text-white">Engenharia de Computação</strong> pela Universidade Estadual de Ponta Grossa (UEPG).
            </p>
            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              Atuei no NTI UEPG desenvolvendo sistemas WEB em Laravel/PHP e lecionei Programação e Informática. Atualmente atuo como Especialista em Suporte Técnico, Infraestrutura de TI e Automação.
            </p>
          </div>

          <div className="bg-slate-900/80 p-6 md:p-8 rounded-3xl backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex flex-col justify-between">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-3 md:mb-4">Destaques</h3>
              <ul className="text-sm md:text-base text-slate-300 space-y-2 list-disc list-inside">
                <li>Análise, resolução de problemas e otimização de código.</li>
                <li>Scripts Python para automação e extração de APIs.</li>
                <li>Suporte Nível 1/2, redes locais e manutenção.</li>
                <li>Desenvolvimento Web (Laravel, React, PHP, Firebase).</li>
              </ul>
            </div>
            
            <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center text-xs md:text-sm text-slate-300">
              <span><strong className="text-white">Inglês:</strong> Avançado</span>
              <span><strong className="text-white">Espanhol:</strong> Básico</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* SEÇÃO CONTATO */}
      <section id="contato" className="min-h-screen w-full bg-transparent flex items-center justify-center snap-center snap-always px-4 py-20 md:py-0 z-10">
        <div className="max-w-3xl w-full text-center bg-slate-900/80 p-6 md:p-12 rounded-3xl backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white drop-shadow-md">Vamos Conversar?</h2>
          <p className="text-sm md:text-lg text-slate-300 mb-6 md:mb-8">
            Estou disponível para novos projetos, suporte especializado ou oportunidades de desenvolvimento.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 md:mb-8 bg-black/40 p-4 md:p-6 rounded-2xl border border-white/10">
            <div className="flex flex-col items-center">
              <span className="text-slate-400 text-xs md:text-sm uppercase tracking-wider mb-1">E-mail Direto</span>
              <span className="text-blue-300 font-mono text-sm md:text-lg font-bold select-all break-all">emersonoliveira1499@gmail.com</span>
            </div>
            <div className="flex flex-col items-center mt-2 md:mt-0">
              <span className="text-slate-400 text-xs md:text-sm uppercase tracking-wider mb-1">Telefone / WhatsApp</span>
              <span className="text-emerald-300 font-mono text-sm md:text-lg font-bold select-all">(42) 99952-2019</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6 md:mb-8">
            <a 
              href="mailto:emersonoliveira1499@gmail.com"
              className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 text-base md:text-lg font-bold rounded-2xl hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            >
              Enviar E-mail
            </a>
            <a 
              href="https://wa.me/5542999522019"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 bg-emerald-600 text-base md:text-lg font-bold rounded-2xl hover:bg-emerald-500 transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)]"
            >
              Conversar no WhatsApp
            </a>
          </div>

          <div className="text-slate-400 text-xs md:text-sm flex justify-center gap-6 pt-4 border-t border-white/10">
            <span>📍 Ipiranga - PR</span>
            <a href="https://github.com/emersonoliveira-WD" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
              Perfil no GitHub
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

export default App;