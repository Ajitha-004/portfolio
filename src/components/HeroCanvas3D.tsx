import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const HeroCanvas3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene & Fog Setup (Deep space near-black with violet atmosphere)
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x07080e, 0.025);

    // 2. Camera Setup
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 100);
    camera.position.set(0, 0, 14);

    // 3. Renderer Setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: 'high-performance' 
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // 4. Lighting - Ambient, Violet, and Cyan Point Lights
    const ambientLight = new THREE.AmbientLight(0x1a0f30, 2.0);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x06b6d4, 4.0, 35);
    cyanLight.position.set(8, 6, 6);
    scene.add(cyanLight);

    const purpleLight = new THREE.PointLight(0xa855f7, 4.5, 40);
    purpleLight.position.set(-8, -5, 6);
    scene.add(purpleLight);

    const blueLight = new THREE.PointLight(0x3b82f6, 2.5, 30);
    blueLight.position.set(0, 8, -4);
    scene.add(blueLight);

    // Mouse interactive tracking light
    const mouseLight = new THREE.PointLight(0xc084fc, 2.0, 20);
    mouseLight.position.set(0, 0, 8);
    scene.add(mouseLight);

    // 5. Central 3D Geometric Structure (AI Neural Core)
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Outer wireframe icosahedron
    const outerGeo = new THREE.IcosahedronGeometry(3.6, 1);
    const outerMat = new THREE.MeshStandardMaterial({
      color: 0x8b5cf6,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
      roughness: 0.1,
      metalness: 0.8
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    coreGroup.add(outerMesh);

    // Middle geodesic dodecahedron with glowing cyan vertices
    const midGeo = new THREE.DodecahedronGeometry(2.4, 0);
    const midMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
      roughness: 0.2,
      metalness: 0.9
    });
    const midMesh = new THREE.Mesh(midGeo, midMat);
    coreGroup.add(midMesh);

    // Inner glowing crystal octahedron
    const innerGeo = new THREE.OctahedronGeometry(1.4, 0);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x9333ea,
      emissive: 0x6b21a8,
      emissiveIntensity: 0.8,
      roughness: 0.3,
      metalness: 0.8,
      transparent: true,
      opacity: 0.85
    });
    const innerMesh = new THREE.Mesh(innerGeo, innerMat);
    coreGroup.add(innerMesh);

    // Rotating orbital rings around the core
    const ringGeo1 = new THREE.TorusGeometry(4.8, 0.04, 16, 100);
    const ringMat1 = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      emissive: 0x0891b2,
      emissiveIntensity: 0.5,
      transparent: true,
      opacity: 0.55
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    coreGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(5.2, 0.03, 16, 100);
    const ringMat2 = new THREE.MeshStandardMaterial({
      color: 0xc084fc,
      emissive: 0x7e22ce,
      emissiveIntensity: 0.5,
      transparent: true,
      opacity: 0.45
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    ring2.rotation.z = Math.PI / 6;
    coreGroup.add(ring2);

    // 6. Floating Technology Objects & Geometric Crystals
    const floatingObjects: {
      mesh: THREE.Object3D;
      rotSpeedX: number;
      rotSpeedY: number;
      floatSpeed: number;
      floatOffset: number;
      baseY: number;
    }[] = [];

    const crystalMaterials = [
      new THREE.MeshStandardMaterial({ color: 0x06b6d4, wireframe: true, transparent: true, opacity: 0.6 }),
      new THREE.MeshStandardMaterial({ color: 0xa855f7, wireframe: true, transparent: true, opacity: 0.55 }),
      new THREE.MeshStandardMaterial({ color: 0x3b82f6, wireframe: true, transparent: true, opacity: 0.5 }),
      new THREE.MeshStandardMaterial({ color: 0xec4899, wireframe: true, transparent: true, opacity: 0.45 })
    ];

    const crystalGeometries = [
      new THREE.OctahedronGeometry(0.9, 0),
      new THREE.TetrahedronGeometry(1.0, 0),
      new THREE.TorusGeometry(0.8, 0.08, 12, 32),
      new THREE.IcosahedronGeometry(0.85, 0)
    ];

    // Seeded coordinates for balanced composition around text & card
    const crystalPositions: [number, number, number][] = [
      [-7.5, 4.0, -2.5],
      [8.0, 4.5, -3.0],
      [-8.5, -3.5, -2.0],
      [8.5, -4.0, -1.5],
      [-5.0, 6.0, -4.0],
      [6.0, -6.5, -3.5],
      [0.0, 6.5, -5.0]
    ];

    crystalPositions.forEach((pos, idx) => {
      const geo = crystalGeometries[idx % crystalGeometries.length];
      const mat = crystalMaterials[idx % crystalMaterials.length];
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(pos[0], pos[1], pos[2]);
      scene.add(mesh);

      floatingObjects.push({
        mesh,
        rotSpeedX: (Math.random() - 0.5) * 0.015,
        rotSpeedY: (Math.random() - 0.5) * 0.02,
        floatSpeed: 0.8 + Math.random() * 0.8,
        floatOffset: idx * 1.2,
        baseY: pos[1]
      });
    });

    // 7. Floating Code Symbols via Dynamic Canvas Textures
    const createCodeSprite = (text: string, color: string) => {
      const canvas = document.createElement('canvas');
      canvas.width = 256;
      canvas.height = 128;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.font = 'bold 44px "JetBrains Mono", "Fira Code", monospace';
        ctx.fillStyle = color;
        ctx.shadowColor = color;
        ctx.shadowBlur = 14;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(text, 128, 64);
      }
      const texture = new THREE.CanvasTexture(canvas);
      const spriteMat = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        opacity: 0.75,
        blending: THREE.AdditiveBlending
      });
      const sprite = new THREE.Sprite(spriteMat);
      sprite.scale.set(2.4, 1.2, 1);
      return sprite;
    };

    const codeSymbols = [
      { text: '{ code }', color: '#a855f7', pos: [-6.5, 2.0, -1.5] as [number, number, number] },
      { text: '</ AI >', color: '#06b6d4', pos: [7.2, 2.2, -1.8] as [number, number, number] },
      { text: '0101', color: '#c084fc', pos: [-5.8, -2.2, -2.0] as [number, number, number] },
      { text: 'λ => ML', color: '#38bdf8', pos: [6.8, -2.5, -2.2] as [number, number, number] },
      { text: '[ NLP ]', color: '#ec4899', pos: [4.5, 5.0, -3.5] as [number, number, number] },
      { text: 'OOP.java', color: '#818cf8', pos: [-4.2, 5.2, -3.0] as [number, number, number] }
    ];

    codeSymbols.forEach((sym, idx) => {
      const sprite = createCodeSprite(sym.text, sym.color);
      sprite.position.set(sym.pos[0], sym.pos[1], sym.pos[2]);
      scene.add(sprite);

      floatingObjects.push({
        mesh: sprite,
        rotSpeedX: 0,
        rotSpeedY: 0,
        floatSpeed: 0.6 + Math.random() * 0.5,
        floatOffset: idx * 1.5,
        baseY: sym.pos[1]
      });
    });

    // 8. Digital Particle Cloud (Neural Dust / Starfield)
    const particleCount = 750;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0xa855f7); // Violet
    const color2 = new THREE.Color(0x06b6d4); // Cyan
    const color3 = new THREE.Color(0x3b82f6); // Blue

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const radius = 6 + Math.random() * 22;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      particlePositions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      particlePositions[i3 + 2] = radius * Math.cos(phi);

      const mixedColor = i % 3 === 0 ? color1 : (i % 3 === 1 ? color2 : color3);
      particleColors[i3] = mixedColor.r;
      particleColors[i3 + 1] = mixedColor.g;
      particleColors[i3 + 2] = mixedColor.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.12,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 9. Mouse Interactive Parallax Tracking
    let targetMouseX = 0;
    let targetMouseY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetMouseX = x;
      targetMouseY = y;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 10. Resize Observer
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    // 11. Animation Loop with Smooth Parallax & Physics
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Parallax camera tilt & pan
      camera.position.x = mouseX * 2.5;
      camera.position.y = mouseY * 2.0;
      camera.lookAt(0, 0, 0);

      // Mouse interactive light tracks position in 3D
      mouseLight.position.x = mouseX * 10;
      mouseLight.position.y = mouseY * 8;

      // Central core multi-axis rotation
      outerMesh.rotation.x += 0.003;
      outerMesh.rotation.y += 0.004;
      midMesh.rotation.x -= 0.004;
      midMesh.rotation.z += 0.005;
      innerMesh.rotation.y += 0.007;

      ring1.rotation.z += 0.003;
      ring2.rotation.x += 0.004;

      // Subtle breath pulsing of central core
      const pulse = 1 + Math.sin(elapsedTime * 1.5) * 0.05;
      coreGroup.scale.set(pulse, pulse, pulse);

      // Rotate particle field slowly
      particles.rotation.y = elapsedTime * 0.025;
      particles.rotation.x = Math.sin(elapsedTime * 0.015) * 0.05;

      // Bob and rotate floating crystal objects
      floatingObjects.forEach((obj) => {
        obj.mesh.rotation.x += obj.rotSpeedX;
        obj.mesh.rotation.y += obj.rotSpeedY;
        obj.mesh.position.y = obj.baseY + Math.sin(elapsedTime * obj.floatSpeed + obj.floatOffset) * 0.35;
      });

      renderer.render(scene, camera);
    };

    animate();

    // 12. Cleanup on Unmount to Prevent Memory Leaks
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      outerGeo.dispose();
      outerMat.dispose();
      midGeo.dispose();
      midMat.dispose();
      innerGeo.dispose();
      innerMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();

      crystalGeometries.forEach((g) => g.dispose());
      crystalMaterials.forEach((m) => m.dispose());

      particleGeo.dispose();
      particleMat.dispose();

      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
      style={{ zIndex: 1 }}
      aria-hidden="true"
    />
  );
};

