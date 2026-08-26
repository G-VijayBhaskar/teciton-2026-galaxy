import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function GalaxyCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x02030a, 0.0005);

    const camera = new THREE.PerspectiveCamera(58, window.innerWidth / window.innerHeight, 1, 5000);
    camera.position.set(0, 40, 650);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Canvas Textures
    const starTexture = createStarTexture();
    const nebulaTexture = createCosmicNebulaTexture();

    const isMobile = window.innerWidth < 640;
    const isTablet = window.innerWidth < 1024;
    const particleFactor = isMobile ? 0.38 : isTablet ? 0.68 : 1.0;

    // 1. Spiral Galaxy Group
    const galaxyGroup = new THREE.Group();

    // Core
    const coreCount = Math.floor(2200 * particleFactor);
    const coreGeo = new THREE.BufferGeometry();
    const corePos = new Float32Array(coreCount * 3);
    const coreCols = new Float32Array(coreCount * 3);
    const cWhite = new THREE.Color('#ffffff');
    const cCream = new THREE.Color('#fffbeb');
    const cGold = new THREE.Color('#fde047');

    for (let i = 0; i < coreCount; i++) {
      const i3 = i * 3;
      const u = Math.random();
      const r = Math.pow(u, 2.2) * 140;
      const theta = Math.random() * Math.PI * 2;
      corePos[i3] = Math.cos(theta) * r * 1.35 + (Math.random() - 0.5) * 12;
      corePos[i3 + 1] = (Math.random() - 0.5) * (35 * (1 - r / 140));
      corePos[i3 + 2] = Math.sin(theta) * r * 0.95 + (Math.random() - 0.5) * 12;

      const ratio = r / 140;
      const col = ratio < 0.3 ? cWhite.clone().lerp(cCream, ratio / 0.3) : cCream.clone().lerp(cGold, (ratio - 0.3) / 0.7);
      coreCols[i3] = col.r; coreCols[i3 + 1] = col.g; coreCols[i3 + 2] = col.b;
    }
    coreGeo.setAttribute('position', new THREE.BufferAttribute(corePos, 3));
    coreGeo.setAttribute('color', new THREE.BufferAttribute(coreCols, 3));

    const coreMat = new THREE.PointsMaterial({
      size: 7.5,
      map: starTexture,
      vertexColors: true,
      transparent: true,
      opacity: 0.96,
      depthWrite: false,
      blending: THREE.AdditiveBlending
    });
    galaxyGroup.add(new THREE.Points(coreGeo, coreMat));

    // Arms
    const armCount = Math.floor(7500 * particleFactor);
    const armGeo = new THREE.BufferGeometry();
    const armPos = new Float32Array(armCount * 3);
    const armCols = new Float32Array(armCount * 3);
    const cIceWhite = new THREE.Color('#f8fafc');
    const cSky = new THREE.Color('#bae6fd');
    const cCyan = new THREE.Color('#22d3ee');
    const cViolet = new THREE.Color('#7c3aed');

    for (let i = 0; i < armCount; i++) {
      const i3 = i * 3;
      const u = Math.random();
      const radius = 90 + Math.pow(u, 1.3) * (700 - 90);
      const spinAngle = Math.log(radius / 90) * 1.32 * 2.8;
      const branchOffset = ((i % 2) / 2) * Math.PI * 2;
      const scatter = Math.pow(Math.random(), 2.4) * (Math.random() < 0.5 ? 1 : -1) * (radius * 0.22);
      const zScatter = Math.pow(Math.random(), 2.4) * (Math.random() < 0.5 ? 1 : -1) * (radius * 0.22);

      const angle = branchOffset + spinAngle;
      armPos[i3] = Math.cos(angle) * radius + scatter;
      armPos[i3 + 1] = (Math.random() - 0.5) * 28 * Math.exp(-radius / 400);
      armPos[i3 + 2] = Math.sin(angle) * radius + zScatter;

      const ratio = (radius - 90) / 610;
      let col = ratio < 0.2 ? cIceWhite.clone().lerp(cSky, ratio / 0.2) : ratio < 0.55 ? cSky.clone().lerp(cCyan, (ratio - 0.2) / 0.35) : cCyan.clone().lerp(cViolet, (ratio - 0.55) / 0.45);
      armCols[i3] = col.r; armCols[i3 + 1] = col.g; armCols[i3 + 2] = col.b;
    }
    armGeo.setAttribute('position', new THREE.BufferAttribute(armPos, 3));
    armGeo.setAttribute('color', new THREE.BufferAttribute(armCols, 3));

    const armMat = new THREE.PointsMaterial({
      size: 6.2, map: starTexture, vertexColors: true, transparent: true, opacity: 0.92, depthWrite: false, blending: THREE.AdditiveBlending
    });
    galaxyGroup.add(new THREE.Points(armGeo, armMat));

    // Nebulae
    const nebCount = Math.floor(1200 * particleFactor);
    const nebGeo = new THREE.BufferGeometry();
    const nebPos = new Float32Array(nebCount * 3);
    const nebCols = new Float32Array(nebCount * 3);
    const cMagenta = new THREE.Color('#ec4899');

    for (let i = 0; i < nebCount; i++) {
      const i3 = i * 3;
      const radius = 100 + Math.random() * 550;
      const angle = ((i % 2) / 2) * Math.PI * 2 + Math.log(radius / 90) * 1.32 * 2.8;
      nebPos[i3] = Math.cos(angle) * radius + (Math.random() - 0.5) * (radius * 0.18);
      nebPos[i3 + 1] = (Math.random() - 0.5) * 20;
      nebPos[i3 + 2] = Math.sin(angle) * radius + (Math.random() - 0.5) * (radius * 0.18);

      const rand = Math.random();
      const col = rand < 0.4 ? cCyan : rand < 0.75 ? cViolet : cMagenta;
      nebCols[i3] = col.r; nebCols[i3 + 1] = col.g; nebCols[i3 + 2] = col.b;
    }
    nebGeo.setAttribute('position', new THREE.BufferAttribute(nebPos, 3));
    nebGeo.setAttribute('color', new THREE.BufferAttribute(nebCols, 3));

    const nebMat = new THREE.PointsMaterial({
      size: 10, map: nebulaTexture, vertexColors: true, transparent: true, opacity: 0.4, depthWrite: false, blending: THREE.AdditiveBlending
    });
    galaxyGroup.add(new THREE.Points(nebGeo, nebMat));

    galaxyGroup.rotation.x = 0.65;
    galaxyGroup.rotation.z = -0.32;
    galaxyGroup.position.set(0, 0, -100);
    scene.add(galaxyGroup);

    // 2. Tunnel Starfield
    const tunnelCount = Math.floor(3500 * particleFactor);
    const tunnelGeo = new THREE.BufferGeometry();
    const tunnelPos = new Float32Array(tunnelCount * 3);
    const tunnelCols = new Float32Array(tunnelCount * 3);

    for (let i = 0; i < tunnelCount; i++) {
      const i3 = i * 3;
      tunnelPos[i3] = (Math.random() - 0.5) * 1600;
      tunnelPos[i3 + 1] = (Math.random() - 0.5) * 1200;
      tunnelPos[i3 + 2] = (Math.random() - 0.5) * 2000;

      const rand = Math.random();
      const col = rand < 0.45 ? cWhite : rand < 0.75 ? cSky : cCyan;
      tunnelCols[i3] = col.r; tunnelCols[i3 + 1] = col.g; tunnelCols[i3 + 2] = col.b;
    }
    tunnelGeo.setAttribute('position', new THREE.BufferAttribute(tunnelPos, 3));
    tunnelGeo.setAttribute('color', new THREE.BufferAttribute(tunnelCols, 3));

    const tunnelMat = new THREE.PointsMaterial({
      size: 4.2, map: starTexture, vertexColors: true, transparent: true, opacity: 0.88, blending: THREE.AdditiveBlending
    });
    scene.add(new THREE.Points(tunnelGeo, tunnelMat));

    // Scroll & Mouse Listeners
    let targetScrollProgress = 0;
    let currentScrollProgress = 0;
    let targetMouseX = 0, targetMouseY = 0;
    let currentMouseX = 0, currentMouseY = 0;

    const handleScroll = () => {
      const docHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight) - window.innerHeight;
      if (docHeight > 0) {
        targetScrollProgress = Math.min(Math.max(window.scrollY / docHeight, 0), 1);
      }
    };

    const handleMouseMove = (e) => {
      targetMouseX = ((e.clientX - window.innerWidth / 2) / (window.innerWidth / 2)) * 25;
      targetMouseY = ((e.clientY - window.innerHeight / 2) / (window.innerHeight / 2)) * 25;
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });

    // Animation Loop
    const clock = new THREE.Clock();
    let animId;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      currentScrollProgress += (targetScrollProgress - currentScrollProgress) * 0.08;
      const p = currentScrollProgress;

      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      galaxyGroup.rotation.z -= delta * (0.03 + p * 0.04);
      galaxyGroup.scale.setScalar(1 + p * 0.6);
      galaxyGroup.rotation.x = 0.65 + p * 0.35;
      galaxyGroup.rotation.y = p * 0.4;

      coreMat.size = 7.5 + Math.sin(elapsedTime * 1.8) * 0.6;
      coreMat.opacity = Math.max(0.2, 0.96 - p * 0.7);

      nebMat.opacity = 0.4 + Math.sin(elapsedTime * 1.5) * 0.1 + p * 0.45;
      nebMat.size = 10 + p * 4;

      const tunnelArr = tunnelGeo.attributes.position.array;
      const speedMult = 1 + p * 3;
      for (let i = 0; i < tunnelCount; i++) {
        const i3 = i * 3;
        let z = tunnelArr[i3 + 2] + (0.5 + p * 2.5) * speedMult;
        if (z > 700) z = -1300;
        tunnelArr[i3 + 2] = z;
      }
      tunnelGeo.attributes.position.needsUpdate = true;

      const targetZ = 650 - p * 870;
      const targetY = 40 - p * 75 - currentMouseY;
      const targetX = currentMouseX;

      camera.position.x += (targetX - camera.position.x) * 0.08;
      camera.position.y += (targetY - camera.position.y) * 0.08;
      camera.position.z += (targetZ - camera.position.z) * 0.08;
      camera.lookAt(0, -p * 60, -150 - p * 300);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <canvas id="bg-canvas" ref={canvasRef} />
      <div className="bg-vignette" />
      <div className="cosmic-glow-blob blob-1" />
      <div className="cosmic-glow-blob blob-2" />
    </>
  );
}

function createStarTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 128; canvas.height = 128;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.12, 'rgba(255, 255, 255, 0.95)');
    grad.addColorStop(0.35, 'rgba(224, 242, 254, 0.75)');
    grad.addColorStop(0.65, 'rgba(147, 197, 253, 0.3)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad; ctx.fillRect(0, 0, 128, 128);
  }
  return new THREE.CanvasTexture(canvas);
}

function createCosmicNebulaTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 128; canvas.height = 128;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
    grad.addColorStop(0.2, 'rgba(34, 211, 238, 0.85)');
    grad.addColorStop(0.5, 'rgba(124, 58, 237, 0.5)');
    grad.addColorStop(0.75, 'rgba(236, 72, 153, 0.2)');
    grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = grad; ctx.fillRect(0, 0, 128, 128);
  }
  return new THREE.CanvasTexture(canvas);
}
