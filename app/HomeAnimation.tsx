"use client";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import Link from "next/link";
const links = [
  { href: "/football", label: "Football" },
  { href: "/calculator", label: "Calculator" },
  { href: "/convertion", label: "Converter" },
  { href: "/notes", label: "Grades" },
];
export const StarfieldHero: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // 1. Escena, Cámara y Renderizador
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // 2. Creación del campo de estrellas (Partículas)
    const starsCount = 2500;
    const positions = new Float32Array(starsCount * 3);
    const velocities = new Float32Array(starsCount);

    for (let i = 0; i < starsCount; i++) {
      // Posiciones aleatorias en el espacio (X, Y, Z)
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

      // Velocidad individual de cada estrella hacia la cámara
      velocities[i] = 0.002 + Math.random() * 0.01;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.035,
      transparent: true,
      opacity: 0.8,
    });

    const starField = new THREE.Points(geometry, material);
    scene.add(starField);

    // 3. Interacción con el cursor (Efecto Parallax)
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 0.3;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 0.3;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 4. Ajuste responsivo al redimensionar la ventana
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // 5. Bucle de Animación
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Movimiento suave del campo estelar según el mouse
      starField.rotation.x += (mouseY - starField.rotation.x) * 0.05;
      starField.rotation.y += (mouseX - starField.rotation.y) * 0.05;

      // Avanzar las estrellas en el eje Z hacia el usuario
      const posAttr = geometry.attributes.position as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;

      for (let i = 0; i < starsCount; i++) {
        posArray[i * 3 + 2] += velocities[i];
        // Si la estrella supera la cámara, reaparece al fondo
        if (posArray[i * 3 + 2] > 5) {
          posArray[i * 3 + 2] = -15;
        }
      }
      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // 6. Limpieza al desmontar el componente
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundColor: "#030712",
      }}
    >
      {/* Contenedor del Canvas de Three.js en el fondo */}
      <div
        ref={mountRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      />

      {/* Capa de texto sobrepuesta en el frente */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          color: "#ffffff",
          textAlign: "center",
          padding: "0 20px",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 800,
            marginBottom: "1rem",
            background: "linear-gradient(135deg, #ffffff 0%, #a5b4fc 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            letterSpacing: "-0.02em",
          }}
        >
          Welcome! Click an option:
        </h1>
        {/* <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            color: "#94a3b8",
            maxWidth: "600px",
            marginBottom: "2rem",
            lineHeight: 1.6,
          }}
        >
         
        </p> */}

        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            style={{
              margin: "5px",
              padding: "12px 28px",
              borderRadius: "9999px",
              border: "none",
              background: "linear-gradient(135deg, #6366f1, #4f46e5)",
              color: "white",
              fontWeight: 600,
              fontSize: "1rem",
              cursor: "pointer",
              boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StarfieldHero;
