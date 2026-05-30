"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroParticles() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = mount.clientWidth;
    let height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);
    renderer.domElement.style.display = "block";

    // Build a drifting cloud of soft gold / cream motes.
    const COUNT = width < 640 ? 90 : 170;
    const positions = new Float32Array(COUNT * 3);
    const speeds = new Float32Array(COUNT);
    const SPREAD_X = 60;
    const SPREAD_Y = 40;
    const SPREAD_Z = 30;

    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * SPREAD_X;
      positions[i * 3 + 1] = (Math.random() - 0.5) * SPREAD_Y;
      positions[i * 3 + 2] = (Math.random() - 0.5) * SPREAD_Z;
      speeds[i] = 0.4 + Math.random() * 0.9;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // Soft circular sprite drawn to a canvas texture.
    const sprite = (() => {
      const c = document.createElement("canvas");
      c.width = 64;
      c.height = 64;
      const ctx = c.getContext("2d");
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, "rgba(255,250,235,0.95)");
      grad.addColorStop(0.35, "rgba(216,190,115,0.6)");
      grad.addColorStop(1, "rgba(201,168,76,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 64, 64);
      const tex = new THREE.CanvasTexture(c);
      return tex;
    })();

    const material = new THREE.PointsMaterial({
      size: width < 640 ? 0.7 : 0.95,
      map: sprite,
      transparent: true,
      opacity: 0.55,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    let mouseX = 0;
    let mouseY = 0;
    const onMove = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", onMove);

    const clock = new THREE.Clock();
    let frameId;

    const render = () => {
      const t = clock.getElapsedTime();
      const pos = geometry.attributes.position.array;
      for (let i = 0; i < COUNT; i++) {
        pos[i * 3 + 1] += speeds[i] * 0.012;
        pos[i * 3] += Math.sin(t * 0.2 + i) * 0.004;
        if (pos[i * 3 + 1] > SPREAD_Y / 2) {
          pos[i * 3 + 1] = -SPREAD_Y / 2;
        }
      }
      geometry.attributes.position.needsUpdate = true;

      // gentle parallax toward the cursor
      camera.position.x += (mouseX * 2.4 - camera.position.x) * 0.03;
      camera.position.y += (-mouseY * 1.6 - camera.position.y) * 0.03;
      camera.lookAt(scene.position);

      points.rotation.y = t * 0.02;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(render);
    };

    if (prefersReduced) {
      renderer.render(scene, camera);
    } else {
      render();
    }

    const onResize = () => {
      if (!mount) return;
      width = mount.clientWidth;
      height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onMove);
      geometry.dispose();
      material.dispose();
      sprite.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[2]"
    />
  );
}
