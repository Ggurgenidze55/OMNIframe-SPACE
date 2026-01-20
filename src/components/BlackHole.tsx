"use client";

import React, { useRef, useMemo, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial, Float, Stars, PerspectiveCamera, Image, Html } from "@react-three/drei";
import { EffectComposer, Bloom, Noise, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const COLORS = {
  brightest: "#ffffff",
  electric: "#a855f7",
  violet: "#7c3aed",
  indigo: "#4c1d95",
  magenta: "#d946ef",
  deep: "#0f001a"
};

// --- LOGO DATA WITH DESCRIPTIONS ---
const LOGO_DATA = [
  { name: "JavaScript", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg", desc: "ვებ-გვერდების ინტერაქტიულობის მთავარი პროგრამირების ენა." },
  { name: "TypeScript", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg", desc: "JavaScript-ის გაუმჯობესებული ვერსია მკაცრი ტიპიზაციით მეტი უსაფრთხოებისთვის." },
  { name: "React", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg", desc: "მომხმარებლის ინტერფეისების ასაგები ყველაზე პოპულარული ბიბლიოთეკა." },
  { name: "Next.js", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg", desc: "React-ის ფრეიმვორკი, რომელიც უზრუნველყოფს სერვერულ რენდერინგს და სისწრაფეს." },
  { name: "Node.js", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg", desc: "JavaScript-ის გარემო სერვერული (Back-end) აპლიკაციების შესაქმნელად." },
  { name: "Python", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", desc: "მრავალმხრივი ენა, იდეალურია AI-სთვის და მონაცემთა ანალიზისთვის." },
  { name: "Tailwind CSS", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg", desc: "CSS ფრეიმვორკი სწრაფი და თანამედროვე დიზაინის შესაქმნელად." },
  { name: "Three.js", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/threejs/threejs-original.svg", desc: "3D გრაფიკის ბიბლიოთეკა, რომლითაც აწყობილია ეს შავი ხვრელი." },
  { name: "HTML5", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg", desc: "ვებ-გვერდის სტრუქტურის საფუძველი და ხერხემალი." },
  { name: "CSS3", url: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg", desc: "ენა, რომელიც ვებ-გვერდს ვიზუალურ სილამაზეს და სტილს სძენს." }
];

const LogoLogo = ({ logo, index, total, onSelect, isSelected }: { logo: typeof LOGO_DATA[0], index: number, total: number, onSelect: (logo: any) => void, isSelected: boolean }) => {
  const ref = useRef<THREE.Group>(null);
  
  const data = useMemo(() => {
    const theta = (index / total) * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    const radius = 18 + Math.random() * 12;
    
    return {
      radius,
      theta,
      phi,
      speed: 0.04 + Math.random() * 0.04
    };
  }, [index, total]);

  const state = useRef({ ...data });

  useFrame((stateObj) => {
    if (ref.current) {
      if (isSelected) {
        // Hide selected logo from 3D space so it doesn't block the view
        ref.current.visible = false;
        return;
      }
      ref.current.visible = true;

      // Normal motion
      state.current.radius -= state.current.speed;
      
      if (state.current.radius < 0.5) {
        state.current.radius = 25 + Math.random() * 10;
        state.current.theta = Math.random() * Math.PI * 2;
        state.current.phi = Math.acos(2 * Math.random() - 1);
      }

      const { radius, theta, phi } = state.current;
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      
      ref.current.position.set(x, y, z);
      ref.current.lookAt(stateObj.camera.position);
      
      const opacity = Math.min(1, (radius - 3.2) * 0.5);
      if (ref.current.children[0]) {
        (ref.current.children[0] as any).material.opacity = Math.max(0, opacity);
      }
      
      const scale = Math.min(1, (radius - 2) * 0.2);
      ref.current.scale.setScalar(Math.max(0, scale));
    }
  });

  return (
    <group 
      ref={ref} 
      onPointerDown={(e) => { 
        e.stopPropagation(); 
        onSelect(logo); 
      }}
    >
      <Image 
        url={logo.url} 
        transparent 
        transparent-opacity={1} 
        onPointerOver={() => { document.body.style.cursor = 'pointer' }}
        onPointerOut={() => { document.body.style.cursor = 'auto' }}
      />
    </group>
  );
};

const LogoStorm = ({ onSelect, selectedLogo }: { onSelect: (logo: any) => void, selectedLogo: any }) => {
  return (
    <group>
      {LOGO_DATA.map((logo, i) => (
        <LogoLogo 
          key={i} 
          logo={logo} 
          index={i} 
          total={LOGO_DATA.length} 
          onSelect={onSelect}
          isSelected={selectedLogo?.name === logo.name}
        />
      ))}
    </group>
  );
};

// 1. Rotating Disk
const RotatingDisk = ({ count = 60000, color = COLORS.violet, size = 0.07, speed = 1, radiusOffset = 4.5 }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const [positions] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      // Use cubic random to pull particles closer to center
      const radius = radiusOffset + Math.pow(Math.random(), 3) * 12;
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = (Math.random() - 0.5) * 0.15 * radius;
      pos[i * 3] = x; pos[i * 3 + 1] = y; pos[i * 3 + 2] = z;
    }
    return [pos];
  }, [count, radiusOffset]);
  useFrame(() => { if (pointsRef.current) pointsRef.current.rotation.y += 0.003 * speed; });
  return (
    <Points ref={pointsRef} positions={positions} stride={3}>
      <PointMaterial transparent color={color} size={size} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} opacity={0.6} />
    </Points>
  );
};

// 2. Inner Inflow
const InnerInflow = ({ count = 40000, color = COLORS.electric }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const [data] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const meta = new Float32Array(count * 3); 
    for (let i = 0; i < count; i++) {
      const radius = Math.pow(Math.random(), 1/3) * 3.15; 
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      meta[i * 3] = radius; meta[i * 3 + 1] = theta; meta[i * 3 + 2] = phi;
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    return [{ pos, meta }];
  }, [count]);
  useFrame((state) => {
    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
      const time = state.clock.getElapsedTime();
      for (let i = 0; i < count; i++) {
        let radius = data.meta[i * 3]; let theta = data.meta[i * 3 + 1]; let phi = data.meta[i * 3 + 2];
        theta += 0.02 * (5.0 / (radius + 0.5));
        phi += 0.01 * Math.sin(time * 0.5 + i);
        radius -= 0.002;
        if (radius < 0.2) { radius = 3.15; theta = Math.random() * Math.PI * 2; phi = Math.acos(2 * Math.random() - 1); }
        data.meta[i * 3] = radius; data.meta[i * 3 + 1] = theta; data.meta[i * 3 + 2] = phi;
        positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        positions[i * 3 + 2] = radius * Math.cos(phi);
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });
  return (
    <Points ref={pointsRef} positions={data.pos} stride={3}>
      <PointMaterial transparent color={color} size={0.05} sizeAttenuation depthWrite={false} depthTest={false} blending={THREE.AdditiveBlending} opacity={0.7} />
    </Points>
  );
};

const EventHorizon = () => <mesh><sphereGeometry args={[3.2, 64, 64]} /><meshBasicMaterial color="#000000" /></mesh>;

const Gargantua = ({ onSelect, selectedLogo }: { onSelect: (logo: any) => void, selectedLogo: any }) => {
  const mainGroup = useRef<THREE.Group>(null);

  return (
    <group ref={mainGroup} rotation={[0.15, 0, 0]}>
      <EventHorizon />
      <group position={[0, 0, 0.5]}>
        <InnerInflow count={40000} color={COLORS.electric} />
        <InnerInflow count={30000} color={COLORS.magenta} />
      </group>
      <LogoStorm onSelect={onSelect} selectedLogo={selectedLogo} />
      {/* Layered disks for more intensity */}
      <group rotation={[0.05, 0, 0]}>
        <RotatingDisk count={80000} color={COLORS.violet} size={0.06} speed={1.5} radiusOffset={4.2} />
        <RotatingDisk count={40000} color={COLORS.indigo} size={0.08} speed={0.8} radiusOffset={5.5} />
      </group>
    </group>
  );
};

export const BlackHole = () => {
  const [selectedLogo, setSelectedLogo] = useState<any>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile on mount and resize
  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh', background: 'black', position: 'fixed', top: 0, left: 0, zIndex: 1 }}>
      {/* BRANDING HEADER */}
      <header style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        padding: isMobile ? '20px' : '30px 50px', 
        zIndex: 100, 
        display: 'flex', 
        alignItems: 'center', 
        gap: isMobile ? '10px' : '15px',
        pointerEvents: 'none'
      }}>
        <div style={{ 
          width: isMobile ? '35px' : '45px', 
          height: isMobile ? '35px' : '45px', 
          border: '2px solid white', 
          borderRadius: isMobile ? '8px' : '12px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)',
          background: 'rgba(255,255,255,0.05)',
          backdropFilter: 'blur(5px)'
        }}>
          <div style={{ 
            width: isMobile ? '15px' : '20px', 
            height: isMobile ? '15px' : '20px', 
            borderRadius: '50%', 
            border: '2.5px solid #a855f7',
            boxShadow: '0 0 10px #a855f7'
          }} />
        </div>
        <h1 style={{ 
          color: 'white', 
          fontSize: isMobile ? '18px' : '26px', 
          fontWeight: '900', 
          letterSpacing: isMobile ? '2px' : '1px', 
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          textShadow: '0 0 10px rgba(255,255,255,0.3)'
        }}>
          OMNIframe
        </h1>
      </header>

      <Canvas 
        dpr={[1, 2]} 
        gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }} 
        raycaster={{ 
          params: { 
            Points: { threshold: 0.1 },
            Mesh: {},
            Line: { threshold: 1 },
            LOD: {},
            Sprite: {}
          } 
        } as any}
      >
        <PerspectiveCamera makeDefault position={[0, 0, isMobile ? 45 : 30]} fov={35} />
        <color attach="background" args={["#000000"]} />
        <Stars radius={150} depth={50} count={isMobile ? 2000 : 4000} factor={4} saturation={0} fade speed={0.1} />
        <Float speed={selectedLogo ? 0 : 0.5} rotationIntensity={0} floatIntensity={0}>
          <Gargantua onSelect={setSelectedLogo} selectedLogo={selectedLogo} />
        </Float>
        <ambientLight intensity={1.5} />
        <EffectComposer>
          <Bloom luminanceThreshold={0.05} mipmapBlur intensity={isMobile ? 2.5 : 3.5} radius={0.5} />
          <Noise opacity={0.04} />
          <Vignette offset={0.2} darkness={1.3} />
        </EffectComposer>
      </Canvas>

      {/* OVERLAY UI - Fixed with explicit styling */}
      <div style={{ 
        position: 'fixed', 
        inset: 0, 
        zIndex: 9999, 
        pointerEvents: selectedLogo ? 'auto' : 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: selectedLogo ? 'rgba(0,0,0,0.8)' : 'transparent',
        backdropFilter: selectedLogo ? 'blur(10px)' : 'none',
        transition: 'all 0.5s ease',
        padding: '20px'
      }}>
        <AnimatePresence>
          {selectedLogo && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '100%',
                maxWidth: '450px',
                background: 'rgba(20, 20, 25, 0.95)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: isMobile ? '30px' : '40px',
                padding: isMobile ? '30px 20px' : '40px',
                textAlign: 'center',
                boxShadow: '0 0 100px rgba(168, 85, 247, 0.2)',
                position: 'relative',
                maxHeight: '90vh',
                overflowY: 'auto'
              }}
            >
              <button 
                onClick={() => setSelectedLogo(null)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'none',
                  border: 'none',
                  color: 'rgba(255,255,255,0.4)',
                  cursor: 'pointer'
                }}
              >
                <X size={isMobile ? 24 : 32} />
              </button>
              
              <div style={{
                width: isMobile ? '90px' : '120px',
                height: isMobile ? '90px' : '120px',
                margin: '0 auto 25px',
                padding: isMobile ? '20px' : '25px',
                borderRadius: '25px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 50px rgba(168, 85, 247, 0.3)'
              }}>
                <img 
                  src={selectedLogo.url} 
                  alt={selectedLogo.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
                />
              </div>
              
              <h2 style={{
                fontSize: isMobile ? '28px' : '36px',
                fontWeight: '900',
                color: 'white',
                marginBottom: '15px',
                letterSpacing: '-1px',
                textTransform: 'uppercase'
              }}>
                {selectedLogo.name}
              </h2>
              
              <p style={{
                fontSize: isMobile ? '16px' : '18px',
                lineHeight: '1.6',
                color: 'rgba(255,255,255,0.8)',
                marginBottom: isMobile ? '30px' : '40px'
              }}>
                {selectedLogo.desc}
              </p>
              
              <button 
                onClick={() => setSelectedLogo(null)}
                style={{
                  width: '100%',
                  padding: isMobile ? '15px' : '18px',
                  background: 'white',
                  color: 'black',
                  fontWeight: '900',
                  borderRadius: '16px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: isMobile ? '16px' : '18px'
                }}
              >
                გაგრძელება
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
