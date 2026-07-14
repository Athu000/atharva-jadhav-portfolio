import React, { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

const Globe: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  useEffect(() => {
    let phi = 0;
    let width = 0;
    
    const onResize = () => {
        if(canvasRef.current) {
            width = canvasRef.current.offsetWidth;
        }
    }
    window.addEventListener('resize', onResize);
    onResize();

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.25,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.05, 0.05, 0.1],
      markerColor: [0, 243/255, 255/255],
      glowColor: [188/255, 19/255, 254/255],
      opacity: 0.85,
      markers: [
        // Pune coordinates: 18.5204° N, 73.8567° E
        { location: [18.5204, 73.8567], size: 0.1 }
      ],
      onRender: (state) => {
        if (!pointerInteracting.current) {
          phi += 0.003;
        }
        state.phi = phi + pointerInteractionMovement.current;
        state.width = width * 2;
        state.height = width * 2;
      },
    });

    if(canvasRef.current) {
        setTimeout(() => {
             if(canvasRef.current) canvasRef.current.style.opacity = '1';
        }, 100);
    }

    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center relative">
       <canvas
        ref={canvasRef}
        className="w-full h-full aspect-square opacity-0 transition-opacity duration-1000 cursor-grab active:cursor-grabbing"
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta * 0.005;
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta * 0.005;
          }
        }}
      />
    </div>
  );
}

export default Globe;