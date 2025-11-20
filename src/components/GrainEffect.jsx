
import React, { useEffect, useRef } from 'react';

const GrainEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const createNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const buffer = new Uint32Array(imageData.data.buffer);

      for (let i = 0; i < buffer.length; i++) {
        if (Math.random() < 0.05) {
          const gray = Math.random() * 50;
          buffer[i] = (20 << 24) | (gray << 16) | (gray << 8) | gray;
        }
      }

      ctx.putImageData(imageData, 0, 0);
    };

    const animate = () => {
      createNoise();
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 opacity-30"
      style={{ mixBlendMode: 'overlay' }}
    />
  );
};

export default GrainEffect;
