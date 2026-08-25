import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Detect WebGL capability
export const isWebGLAvailable = (): boolean => {
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
  } catch (e) {
    return false;
  }
};

/**
 * Creates ultra-fine Gaussian Star Texture with realistic falloff
 */
function createStarTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.12, 'rgba(255, 255, 255, 0.95)');
    grad.addColorStop(0.35, 'rgba(224, 242, 254, 0.75)');
    grad.addColorStop(0.65, 'rgba(147, 197, 253, 0.3)');
    grad.addColorStop(0.88, 'rgba(96, 165, 250, 0.08)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 128, 128);
  }
  return new THREE.CanvasTexture(canvas);
}

/**
 * Creates soft Cosmic Nebula Texture (Cyan / Violet / Magenta)
 */
function createCosmicNebulaTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 128;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.2, 'rgba(34, 211, 238, 0.85)'); // Subtle Cyan
    grad.addColorStop(0.5, 'rgba(124, 58, 237, 0.5)');  // Subtle Violet
    grad.addColorStop(0.75, 'rgba(236, 72, 153, 0.2)'); // Subtle Magenta
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 128, 128);
  }
  return new THREE.CanvasTexture(canvas);
}

/**
 * Creates 4-Point Diffraction Spike Star Texture (Hubble / James Webb Style)
 */
function createDiffractionSpikeTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const grad = ctx.createRadialGradient(128, 128, 0, 128, 128, 64);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.18, 'rgba(255, 250, 235, 0.9)');
    grad.addColorStop(0.4, 'rgba(186, 230, 253, 0.4)');
    grad.addColorStop(0.8, 'rgba(147, 197, 253, 0.1)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 256, 256);

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(128, 4);
    ctx.lineTo(128, 252);
    ctx.moveTo(4, 128);
    ctx.lineTo(252, 128);
    ctx.stroke();

    ctx.strokeStyle = 'rgba(186, 230, 253, 0.35)';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(128, 30);
    ctx.lineTo(128, 226);
    ctx.moveTo(30, 128);
    ctx.lineTo(226, 128);
    ctx.stroke();
  }
  return new THREE.CanvasTexture(canvas);
}

// Global scroll state ref to avoid React state re-renders during frame loop
const scrollState = {
  targetProgress: 0,
  currentProgress: 0,
};

interface GalaxyProps {
  particleFactor: number;
  reducedMotion: boolean;
}

/**
 * Layer 1: Outer Distant Spiral Galaxy Mesh & Core
 */
const SpiralGalaxyStructure: React.FC<GalaxyProps> = ({ particleFactor, reducedMotion }) => {
  const galaxyGroupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Points>(null);
  const nebulaRef = useRef<THREE.Points>(null);

  const starTexture = useMemo(() => createStarTexture(), []);
  const nebulaTexture = useMemo(() => createCosmicNebulaTexture(), []);
  const spikeTexture = useMemo(() => createDiffractionSpikeTexture(), []);

  // Generate Core Geometry
  const coreData = useMemo(() => {
    const count = Math.floor(2200 * particleFactor);
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const cWhite = new THREE.Color('#ffffff');
    const cWarmCream = new THREE.Color('#fffbeb');
    const cGold = new THREE.Color('#fde047');

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const u = Math.random();
      const r = Math.pow(u, 2.2) * 140;
      const theta = Math.random() * Math.PI * 2;

      positions[i3] = Math.cos(theta) * r * 1.35 + (Math.random() - 0.5) * 12;
      positions[i3 + 1] = (Math.random() - 0.5) * (35 * (1 - r / 140));
      positions[i3 + 2] = Math.sin(theta) * r * 0.95 + (Math.random() - 0.5) * 12;

      const ratio = r / 140;
      const col = ratio < 0.3 ? cWhite.clone().lerp(cWarmCream, ratio / 0.3) : cWarmCream.clone().lerp(cGold, (ratio - 0.3) / 0.7);
      colors[i3] = col.r;
      colors[i3 + 1] = col.g;
      colors[i3 + 2] = col.b;
    }
    return { positions, colors };
  }, [particleFactor]);

  // Generate Spiral Arms Geometry
  const armsData = useMemo(() => {
    const count = Math.floor(7500 * particleFactor);
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const cIceWhite = new THREE.Color('#f8fafc');
    const cSkyBlue = new THREE.Color('#bae6fd');
    const cCyan = new THREE.Color('#22d3ee');
    const cDeepBlue = new THREE.Color('#38bdf8');
    const cViolet = new THREE.Color('#7c3aed');

    const branches = 2;
    const maxRadius = 700;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const u = Math.random();
      const radius = 90 + Math.pow(u, 1.3) * (maxRadius - 90);

      const spin = 1.32;
      const spinAngle = Math.log(radius / 90) * spin * 2.8;
      const branchOffset = ((i % branches) / branches) * Math.PI * 2;

      const scatterPower = 2.4;
      const scatter = Math.pow(Math.random(), scatterPower) * (Math.random() < 0.5 ? 1 : -1) * (radius * 0.22);
      const zScatter = Math.pow(Math.random(), scatterPower) * (Math.random() < 0.5 ? 1 : -1) * (radius * 0.22);
      const yScatter = (Math.random() - 0.5) * 28 * Math.exp(-radius / 400);

      const currentAngle = branchOffset + spinAngle;
      positions[i3] = Math.cos(currentAngle) * radius + scatter;
      positions[i3 + 1] = yScatter;
      positions[i3 + 2] = Math.sin(currentAngle) * radius + zScatter;

      const ratio = (radius - 90) / (maxRadius - 90);
      let col;
      if (ratio < 0.2) col = cIceWhite.clone().lerp(cSkyBlue, ratio / 0.2);
      else if (ratio < 0.55) col = cSkyBlue.clone().lerp(cCyan, (ratio - 0.2) / 0.35);
      else if (ratio < 0.85) col = cCyan.clone().lerp(cDeepBlue, (ratio - 0.55) / 0.3);
      else col = cDeepBlue.clone().lerp(cViolet, (ratio - 0.85) / 0.15);

      colors[i3] = col.r;
      colors[i3 + 1] = col.g;
      colors[i3 + 2] = col.b;
    }
    return { positions, colors };
  }, [particleFactor]);

  // Generate Cosmic Nebula Dust Regions
  const nebulaData = useMemo(() => {
    const count = Math.floor(1200 * particleFactor);
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const cCyan = new THREE.Color('#22d3ee');
    const cViolet = new THREE.Color('#7c3aed');
    const cMagenta = new THREE.Color('#ec4899');

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const radius = 100 + Math.random() * 550;
      const spinAngle = Math.log(radius / 90) * 1.32 * 2.8;
      const branchOffset = ((i % 2) / 2) * Math.PI * 2;

      const angle = branchOffset + spinAngle;
      positions[i3] = Math.cos(angle) * radius + (Math.random() - 0.5) * (radius * 0.18);
      positions[i3 + 1] = (Math.random() - 0.5) * 20;
      positions[i3 + 2] = Math.sin(angle) * radius + (Math.random() - 0.5) * (radius * 0.18);

      const rand = Math.random();
      const col = rand < 0.4 ? cCyan : rand < 0.75 ? cViolet : cMagenta;
      colors[i3] = col.r;
      colors[i3 + 1] = col.g;
      colors[i3 + 2] = col.b;
    }
    return { positions, colors };
  }, [particleFactor]);

  useFrame((state, delta) => {
    const p = scrollState.currentProgress;

    if (galaxyGroupRef.current) {
      // Continuous slow majestic rotation, slightly accelerated when scrolling forward
      if (!reducedMotion) {
        galaxyGroupRef.current.rotation.z -= delta * (0.03 + p * 0.04);
      }
      // Expand galaxy arms outwardly and tilt transition as camera flies deeper into space
      galaxyGroupRef.current.scale.setScalar(1 + p * 0.6);
      galaxyGroupRef.current.rotation.x = 0.65 + p * 0.35;
      galaxyGroupRef.current.rotation.y = p * 0.4;
    }

    if (coreRef.current && coreRef.current.material) {
      // Core size pulses and gradually dims as camera travels into deep space
      const mat = coreRef.current.material as THREE.PointsMaterial;
      mat.size = 7.5 + Math.sin(state.clock.elapsedTime * 1.8) * 0.6;
      mat.opacity = Math.max(0.2, 0.96 - p * 0.7);
    }

    if (nebulaRef.current && nebulaRef.current.material) {
      // Deep Cosmic Nebula regions become more visible during 50% - 100% scroll
      const mat = nebulaRef.current.material as THREE.PointsMaterial;
      mat.opacity = 0.4 + Math.sin(state.clock.elapsedTime * 1.5) * 0.1 + p * 0.45;
      mat.size = 10 + p * 4;
    }
  });

  return (
    <group ref={galaxyGroupRef} rotation={[0.65, 0, -0.32]} position={[0, 0, -100]}>
      {/* Galactic Core */}
      <points ref={coreRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={coreData.positions.length / 3} array={coreData.positions} itemSize={3} />
          <bufferAttribute attach="attributes-color" count={coreData.colors.length / 3} array={coreData.colors} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={7.5} map={starTexture} vertexColors transparent opacity={0.96} depthWrite={false} blending={THREE.AdditiveBlending} />
      </points>

      {/* Spiral Arms */}
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={armsData.positions.length / 3} array={armsData.positions} itemSize={3} />
          <bufferAttribute attach="attributes-color" count={armsData.colors.length / 3} array={armsData.colors} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={6.2} map={starTexture} vertexColors transparent opacity={0.92} depthWrite={false} blending={THREE.AdditiveBlending} />
      </points>

      {/* Cosmic Nebula Regions */}
      <points ref={nebulaRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={nebulaData.positions.length / 3} array={nebulaData.positions} itemSize={3} />
          <bufferAttribute attach="attributes-color" count={nebulaData.colors.length / 3} array={nebulaData.colors} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={10} map={nebulaTexture} vertexColors transparent opacity={0.4} depthWrite={false} blending={THREE.AdditiveBlending} />
      </points>

      {/* Spiked Foreground Stars */}
      {[
        { pos: [-180, 220, 120] as const, size: 48, col: '#ffffff' },
        { pos: [380, -120, 100] as const, size: 56, col: '#fff7ed' },
        { pos: [-320, -180, 140] as const, size: 44, col: '#93c5fd' },
        { pos: [260, 260, 110] as const, size: 50, col: '#ffffff' },
      ].map((s, idx) => (
        <sprite key={idx} position={s.pos} scale={[s.size, s.size, 1]}>
          <spriteMaterial map={spikeTexture} color={s.col} transparent opacity={0.95} blending={THREE.AdditiveBlending} />
        </sprite>
      ))}
    </group>
  );
};

/**
 * Layer 2: Deep Tunnel Stars Passing by the Camera during Scroll
 */
const TunnelPassingStarfield: React.FC<GalaxyProps> = ({ particleFactor, reducedMotion }) => {
  const pointsRef = useRef<THREE.Points>(null);
  const starTexture = useMemo(() => createStarTexture(), []);

  // Generate 3D stars distributed inside a long Z-tunnel [-1200, +800]
  const tunnelData = useMemo(() => {
    const count = Math.floor(3500 * particleFactor);
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const originalZ = new Float32Array(count);

    const cWhite = new THREE.Color('#ffffff');
    const cSky = new THREE.Color('#bae6fd');
    const cCyan = new THREE.Color('#22d3ee');
    const cViolet = new THREE.Color('#7c3aed');

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const x = (Math.random() - 0.5) * 1600;
      const y = (Math.random() - 0.5) * 1200;
      const z = (Math.random() - 0.5) * 2000;

      positions[i3] = x;
      positions[i3 + 1] = y;
      positions[i3 + 2] = z;
      originalZ[i] = z;

      const rand = Math.random();
      const col = rand < 0.45 ? cWhite : rand < 0.75 ? cSky : rand < 0.9 ? cCyan : cViolet;
      colors[i3] = col.r;
      colors[i3 + 1] = col.g;
      colors[i3 + 2] = col.b;
    }
    return { positions, colors, originalZ, count };
  }, [particleFactor]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    const p = scrollState.currentProgress;

    // Drifting animation + scroll speed acceleration
    if (!reducedMotion) {
      pointsRef.current.rotation.z += delta * 0.01;
    }

    const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;
    const speedMultiplier = 1 + p * 3;

    for (let i = 0; i < tunnelData.count; i++) {
      const i3 = i * 3;
      // Stars drift forward towards camera as scroll increases
      let z = pos[i3 + 2] + (0.5 + p * 2.5) * speedMultiplier;
      
      // Loop z position around seamlessly if it passes camera
      if (z > 700) {
        z = -1300;
      }
      pos[i3 + 2] = z;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={tunnelData.count} array={tunnelData.positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={tunnelData.count} array={tunnelData.colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={4.2} map={starTexture} vertexColors transparent opacity={0.88} blending={THREE.AdditiveBlending} />
    </points>
  );
};

/**
 * Layer 3: Distant Background Starfield
 */
const DistantStarfield: React.FC<GalaxyProps> = ({ particleFactor }) => {
  const starsRef = useRef<THREE.Points>(null);
  const starTexture = useMemo(() => createStarTexture(), []);

  const starsData = useMemo(() => {
    const count = Math.floor(3000 * particleFactor);
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const cWhite = new THREE.Color('#ffffff');
    const cBlue = new THREE.Color('#93c5fd');
    const cGold = new THREE.Color('#fde047');

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 4500;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 3600;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4500 - 400;

      const rand = Math.random();
      const col = rand < 0.5 ? cWhite : rand < 0.8 ? cBlue : cGold;
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }
    return { positions, colors };
  }, [particleFactor]);

  useFrame((_, delta) => {
    if (starsRef.current) {
      starsRef.current.rotation.y += delta * 0.005;
    }
  });

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={starsData.positions.length / 3} array={starsData.positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={starsData.colors.length / 3} array={starsData.colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={3.2} map={starTexture} vertexColors transparent opacity={0.8} blending={THREE.AdditiveBlending} />
    </points>
  );
};

/**
 * Camera Controller: Smoothly animates camera Z position, Y tilt & mouse parallax
 * based on normalized scroll progress (0.0 to 1.0)
 */
const ScrollCameraRig: React.FC<{ reducedMotion: boolean }> = ({ reducedMotion }) => {
  const { camera } = useThree();
  const targetMouse = useRef({ x: 0, y: 0 });
  const currentMouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (reducedMotion) return;
      targetMouse.current.x = ((e.clientX - window.innerWidth / 2) / (window.innerWidth / 2)) * 25;
      targetMouse.current.y = ((e.clientY - window.innerHeight / 2) / (window.innerHeight / 2)) * 25;
    };

    const handleScroll = () => {
      const docHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight
      ) - window.innerHeight;
      
      if (docHeight > 0) {
        const rawProgress = window.scrollY / docHeight;
        scrollState.targetProgress = Math.min(Math.max(rawProgress, 0), 1);
      }
    };

    handleScroll();
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [reducedMotion]);

  useFrame(() => {
    // Smooth lerp for scroll progress (0.0 to 1.0)
    scrollState.currentProgress += (scrollState.targetProgress - scrollState.currentProgress) * 0.08;
    const p = scrollState.currentProgress;

    // Smooth lerp for mouse parallax
    currentMouse.current.x += (targetMouse.current.x - currentMouse.current.x) * 0.05;
    currentMouse.current.y += (targetMouse.current.y - currentMouse.current.y) * 0.05;

    // CINEMATIC DEEP SPACE CAMERA TRAJECTORY:
    // Scroll 0.0  (Hero - Outer Galaxy): z = 650, y = 40
    // Scroll 0.25 (About - Entering Galaxy): z = 420, y = 20
    // Scroll 0.50 (Events - Nebula Zone): z = 180, y = 0
    // Scroll 0.75 (Schedule - Deep Space): z = -20, y = -15
    // Scroll 1.00 (Contact - Cosmic Core): z = -220, y = -35
    const targetZ = 650 - p * 870; // 650 down to -220
    const targetY = 40 - p * 75 - currentMouse.current.y;
    const targetX = currentMouse.current.x;

    camera.position.x += (targetX - camera.position.x) * 0.08;
    camera.position.y += (targetY - camera.position.y) * 0.08;
    camera.position.z += (targetZ - camera.position.z) * 0.08;

    // Look at focal center in space
    camera.lookAt(0, -p * 60, -150 - p * 300);
  });

  return null;
};

export interface GalaxyCanvasProps {
  onWebGlError?: () => void;
}

export const GalaxyCanvas: React.FC<GalaxyCanvasProps> = ({ onWebGlError }) => {
  const [particleFactor, setParticleFactor] = useState(1);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);

    const updateQuality = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setParticleFactor(0.38); // Mobile (approx 3,500 particles total)
      } else if (width < 1024) {
        setParticleFactor(0.68); // Tablet (approx 7,500 particles total)
      } else {
        setParticleFactor(1.0); // Desktop (approx 13,500 particles total)
      }
    };

    updateQuality();
    window.addEventListener('resize', updateQuality);

    return () => {
      mediaQuery.removeEventListener('change', listener);
      window.removeEventListener('resize', updateQuality);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#02030a]">
      <Canvas
        camera={{ position: [0, 40, 650], fov: 58, near: 1, far: 5000 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        dpr={[1, Math.min(window.devicePixelRatio, 2)]}
        onCreated={({ gl }) => {
          if (!gl) {
            if (onWebGlError) onWebGlError();
          }
        }}
      >
        <ambientLight intensity={1.8} />
        <pointLight position={[0, 0, 80]} intensity={6} color="#fff7ed" distance={1600} />
        <pointLight position={[300, 200, 100]} intensity={3} color="#93c5fd" distance={1400} />

        <SpiralGalaxyStructure particleFactor={particleFactor} reducedMotion={reducedMotion} />
        <TunnelPassingStarfield particleFactor={particleFactor} reducedMotion={reducedMotion} />
        <DistantStarfield particleFactor={particleFactor} reducedMotion={reducedMotion} />
        <ScrollCameraRig reducedMotion={reducedMotion} />
      </Canvas>

      {/* Deep Space Atmosphere Background Gradients */}
      <div className="absolute inset-0 bg-radial-vignette opacity-80" />
      <div className="absolute top-1/4 left-10 w-[450px] h-[450px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-[550px] h-[550px] bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />
    </div>
  );
};

export default GalaxyCanvas;
