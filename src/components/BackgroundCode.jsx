import { useEffect, useRef } from 'react';

// Altere este valor para controlar a velocidade:
// Valore menores = mais rápido (ex: 30)
// Valores maiores = mais lento / suave (ex: 80 ou 100)
const SPEED_INTERVAL = 60; 

export default function BackgroundCode() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let lastTime = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const chars = '010101010101<>/{}=[];+*#';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    
    const drops = Array(columns).fill(1).map(() => Math.floor(Math.random() * -50));

    const draw = (currentTime) => {
      animationFrameId = requestAnimationFrame(draw);

      // Controle de Velocidade via Cronômetro
      const delta = currentTime - lastTime;
      if (delta < SPEED_INTERVAL) return;
      lastTime = currentTime;

      // Fundo levemente transparente para criar o rastro
      ctx.fillStyle = 'rgba(15, 23, 42, 0.2)'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#3b82f6'; // Azul neon
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-30 filter blur-[0.5px]">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}