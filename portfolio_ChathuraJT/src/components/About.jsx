import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function About() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 1000);
    camera.position.z = 60;

    const starCount = 500;
    const positions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i += 1) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 160;
      positions[i3 + 1] = (Math.random() - 0.5) * 120;
      positions[i3 + 2] = (Math.random() - 0.5) * 160;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: '#16a34a',
      size: 0.6,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
    });

    const stars = new THREE.Points(geometry, material);
    scene.add(stars);

    const resize = () => {
      const { clientWidth, clientHeight } = canvas.parentElement || canvas;
      renderer.setSize(clientWidth, clientHeight, false);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    };

    resize();
    window.addEventListener('resize', resize);

    let animationId;
    const animate = () => {
      stars.rotation.y += 0.0008;
      stars.rotation.x += 0.0003;
      renderer.render(scene, camera);
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);
  // Bio
  const bio = `Hi, I'm an undergraduate IT student at the Sri Lanka Institute of Information Technology (SLIIT), But before you picture a student buried under textbooks and assignment deadlines, let me paint you a different picture.
I'm the kind of developer who opens a browser and sees a canvas. Not a webpage. A canvas. A space where physics, light, shadow, animation, and interaction can collide into something that feels less like software and more like an experience you step into.
That obsession is what drives everything I build.`;

  return (
    <section id="about" className="relative flex-col py-24 overflow-hidden transition-colors duration-300 about-background">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />
      {/* Background Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-white via-white/60 to-transparent dark:from-black dark:via-black/70 dark:to-transparent"></div>

      <div className="relative z-10 max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          {/* Section Header */}
          <div className="mb-12 text-left">
            <h2 className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl dark:text-white">
              About <span className="text-green-600 dark:text-green-400">Me</span>
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-gray-800 to-gray-700"></div>
          </div>

          <div className="grid gap-12 lg:grid-cols-1">
            {/* Bio Text */}
            <div>
              <p className="text-lg leading-relaxed text-left text-black whitespace-pre-line dark:text-gray-300">
                {bio}
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="grid gap-8 pt-12 mt-16 border-t border-black md:grid-cols-3 dark:border-gray-800">
            <div className="text-left">
              <div className="mb-1 text-4xl font-bold text-green-600 dark:text-green-400">
                15+
              </div>
              <p className="text-sm font-medium text-black dark:text-gray-400">Projects Completed</p>
            </div>

            <div className="text-left">
              <div className="mb-1 text-4xl font-bold text-green-600 dark:text-green-400">
                2+
              </div>
              <p className="text-sm font-medium text-black dark:text-gray-400">Years Experience</p>
            </div>

            <div className="text-left">
              <div className="mb-1 text-4xl font-bold text-green-600 dark:text-green-400">
                100%
              </div>
              <p className="text-sm font-medium text-black dark:text-gray-400">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
