import { motion } from 'framer-motion';
import { useState } from 'react';

const projetos = [
  {
    id: 1,
    titulo: "SFB - Frente de Balcão",
    descricao: "Sistema completo para cadastro de produtos, fornecedores e clientes. Conta com histórico individual, análise estatística de vendas e salvamento local com backup automático em nuvem.",
    tags: ["Python", "PostgreSQL", "VS Code"],
    link: "https://github.com/emersonoliveira-WD/SFB"
  },
  {
    id: 2,
    titulo: "Calculadora Estatística",
    descricao: "Software em Python e scripts em Google Apps Script/Planilhas para processar dados em massa, executar cálculos estatísticos automáticos e gerar visualizações intuitivas.",
    tags: ["Python", "JavaScript", "Google Apps Script"],
    link: "https://github.com/emersonoliveira-WD/estatistica"
  },
  {
    id: 3,
    titulo: "Improve Image",
    descricao: "Projeto focado em melhoria, processamento e restauração visual de imagens, utilizando algoritmos otimizados para aprimoramento de resolução e qualidade.",
    tags: ["Python", "Processamento de Imagem"],
    link: "https://github.com/emersonoliveira-WD/improve-image"
  },
  {
    id: 4,
    titulo: "Automação Mover Pasta",
    descricao: "Script desenvolvido para automação de tarefas de infraestrutura e organização de arquivos, facilitando a movimentação e estruturação de diretórios no sistema.",
    tags: ["Python", "Automação", "OS"],
    link: "https://github.com/emersonoliveira-WD/Mover-Pasta"
  },
  {
    id: 5,
    titulo: "API Mensalistas",
    descricao: "API para gerenciamento e integração de dados de mensalistas. Permite controle de acessos, registros de histórico e consumo simplificado de endpoints.",
    tags: ["API Rest", "Backend", "Node / Python"],
    link: "https://github.com/emersonoliveira-WD/Api---Mensalistas"
  },
  {
    id: 6,
    titulo: "CocoR",
    descricao: "Repositório com soluções e algoritmos para processamento e análise de dados específicos, aplicando conceitos avançados de lógica e estrutura de código.",
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
    <div className="w-full">
      
      {/* MENU SUPERIOR (NAVBAR) */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-12 py-8 bg-transparent">
        <div className="text-3xl font-bold tracking-wider drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
          EMERSON<span className="text-blue-400">.DEV</span>
        </div>
        
        <div className="flex gap-8 items-center text-xl md:text-2xl font-semibold">
          <a href="#inicio" className="hover:text-blue-400 hover:drop-shadow-[0_0_12px_rgba(96,165,250,0.8)] transition-all">Início</a>
          <a href="#projetos" className="hover:text-blue-400 hover:drop-shadow-[0_0_12px_rgba(96,165,250,0.8)] transition-all">Projetos</a>
          <a href="#sobre" className="hover:text-blue-400 hover:drop-shadow-[0_0_12px_rgba(96,165,250,0.8)] transition-all">Sobre</a>
          
          {/* Novo Botão: Ver no Git */}
          <a 
            href="https://github.com/emersonoliveira-WD/meu-portfolio" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-purple-400 hover:drop-shadow-[0_0_12px_rgba(192,132,252,0.8)] transition-all flex items-center gap-1"
          >
            Ver no Git
          </a>

          <a 
            href="#contato" 
            className="px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-full transition-all shadow-[0_0_20px_rgba(37,99,235,0.6)] hover:shadow-[0_0_30px_rgba(37,99,235,0.8)]"
          >
            Contato
          </a>
        </div>
      </nav>

      {/* TELA INICIAL (HERO) */}
      <section id="inicio" className="h-screen w-full flex flex-col justify-center items-center relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 snap-center snap-always">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-4xl px-4 z-10"
        >
          <span className="text-blue-400 font-semibold tracking-widest uppercase mb-4 block text-xl">Engenheiro de Computação</span>
          <h1 className="text-6xl md:text-8xl font-extrabold mb-8 tracking-tight drop-shadow-lg">
            Emerson <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Oliveira</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-3xl mx-auto">
            Desenvolvimento de Software, Automação em Python, Integração de APIs e Soluções de Infraestrutura de TI.
          </p>
        </motion.div>

        <motion.a 
          href="#projetos"
          className="absolute bottom-12 flex flex-col items-center gap-3 opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <span className="text-lg tracking-widest uppercase drop-shadow-md">Role para explorar</span>
          <motion.div animate={{ y: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>
            <svg className="w-8 h-8 text-blue-400 drop-shadow-[0_0_8px_rgba(96,165,250,0.8)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.a>
      </section>

      {/* SEÇÃO DE PROJETOS - CARROSSEL GLASSMORPHISM */}
      <section id="projetos" className="h-screen w-full bg-slate-900 flex flex-col items-center justify-center relative overflow-hidden snap-center snap-always">
        
        <button 
          onClick={prevProject} 
          className="absolute left-10 z-30 p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 backdrop-blur-md transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] text-white hover:scale-110 cursor-pointer"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
        </button>

        <button 
          onClick={nextProject} 
          className="absolute right-10 z-30 p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/20 backdrop-blur-md transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)] text-white hover:scale-110 cursor-pointer"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
        </button>

        <div className="relative w-full max-w-5xl h-[65vh] flex items-center justify-center perspective-1000">
          {projetos.map((projeto, i) => {
            const relIndex = getRelativeIndex(i);
            
            const isCenter = relIndex === 0;
            const x = isCenter ? "0%" : relIndex === 1 ? "75%" : relIndex === -1 ? "-75%" : relIndex > 1 ? "150%" : "-150%";
            const scale = isCenter ? 1 : 0.8;
            const opacity = isCenter ? 1 : Math.abs(relIndex) === 1 ? 0.3 : 0;
            const zIndex = isCenter ? 20 : 10;

            return (
              <motion.div
                key={projeto.id}
                animate={{ x, scale, opacity, zIndex }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
                className="absolute w-[90%] max-w-2xl h-full flex flex-col justify-between p-10 rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
                style={{
                  pointerEvents: isCenter ? "auto" : "none"
                }}
              >
                <div>
                  <h3 className="text-3xl font-bold mb-2 text-white drop-shadow-md">{projeto.titulo}</h3>
                  <div className="w-16 h-1 bg-blue-500 rounded-full mb-6 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                  <p className="text-lg text-slate-200 leading-relaxed mb-6">
                    {projeto.descricao}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {projeto.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/10 text-blue-300 text-sm rounded-md border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a 
                  href={projeto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-start mt-6 px-8 py-3 rounded-xl bg-blue-600/80 hover:bg-blue-600 border border-blue-400/30 transition-all font-medium flex items-center gap-2 group shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                >
                  Ver Repositório no GitHub
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* SEÇÃO SOBRE MIM */}
      <section id="sobre" className="h-screen w-full bg-slate-800 flex flex-col items-center justify-center snap-center snap-always relative shadow-inner px-6">
        <h2 className="text-5xl font-bold mb-10 text-slate-100">Sobre Mim</h2>
        
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/10">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">Formação & Trajetória</h3>
            <p className="text-slate-300 mb-4 leading-relaxed">
              Bacharel em <strong className="text-white">Engenharia de Computação</strong> pela Universidade Estadual de Ponta Grossa (UEPG)[cite: 1].
            </p>
            <p className="text-slate-300 leading-relaxed">
              Atuei no NTI UEPG desenvolvendo sistemas WEB em Laravel/PHP[cite: 1] e lecionei Programação e Informática[cite: 1]. Atualmente atuo como Especialista em Suporte Técnico, Infraestrutura de TI e Automação[cite: 1].
            </p>
          </div>

          <div className="bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/10 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Destaques</h3>
              <ul className="text-slate-300 space-y-2 list-disc list-inside">
                <li>Análise, resolução de problemas e otimização de código[cite: 1].</li>
                <li>Scripts Python para automação e extração de APIs[cite: 1].</li>
                <li>Suporte Nível 1/2, redes locais e manutenção[cite: 1].</li>
                <li>Desenvolvimento Web (Laravel, React, PHP, Firebase)[cite: 1].</li>
              </ul>
            </div>
            
            <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center text-slate-300">
              <span><strong className="text-white">Inglês:</strong> Avançado[cite: 1]</span>
              <span><strong className="text-white">Espanhol:</strong> Básico[cite: 1]</span>
            </div>
          </div>

        </div>
      </section>
      
      {/* SEÇÃO CONTATO (Com dados visíveis) */}
      <section id="contato" className="h-screen w-full bg-slate-900 flex items-center justify-center snap-center snap-always px-4">
        <div className="max-w-3xl w-full text-center bg-white/5 p-12 rounded-3xl backdrop-blur-md border border-white/10 shadow-2xl">
          <h2 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">Vamos Conversar?</h2>
          <p className="text-slate-300 text-lg mb-8">
            Estou disponível para novos projetos, suporte especializado ou oportunidades de desenvolvimento.
          </p>

          {/* Dados numéricos e texto destacados */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 bg-black/20 p-6 rounded-2xl border border-white/5">
            <div className="flex flex-col items-center">
              <span className="text-slate-400 text-sm uppercase tracking-wider mb-1">E-mail</span>
              <span className="text-blue-300 font-mono text-lg font-bold select-all">emersonoliveira1499@gmail.com</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-slate-400 text-sm uppercase tracking-wider mb-1">Telefone / WhatsApp</span>
              <span className="text-emerald-300 font-mono text-lg font-bold select-all">(42) 99952-2019</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a 
              href="mailto:emersonoliveira1499@gmail.com"
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-lg font-bold rounded-2xl hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            >
              Enviar E-mail
            </a>
            <a 
              href="https://wa.me/5542999522019"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-emerald-600 text-lg font-bold rounded-2xl hover:bg-emerald-500 transition-all shadow-[0_0_20px_rgba(16,185,129,0.4)]"
            >
              Conversar no WhatsApp
            </a>
          </div>

          <div className="text-slate-400 text-sm flex justify-center gap-6 pt-4 border-t border-white/10">
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