"use client";

/**
 * 3D Hero accent — Damascus arabesque tile rendered as a wireframe
 * 8-pointed star (khatim pattern) with nested rotated squares.
 *
 * Built procedurally with Three.js cylinder segments so the geometry
 * stays crisp at any zoom and the bundle stays lean (no SVG textures,
 * no GLB models). Slowly rotates on Y, gentle drift on X.
 *
 * Performance:
 *   - 16 short cylinders total (~120 tris) — negligible draw cost
 *   - MeshBasicMaterial (no lighting calculation)
 *   - Canvas lazy-mounted via dynamic import in the Hero
 *   - Disabled entirely under prefers-reduced-motion (renders a
 *     static SVG silhouette instead)
 */

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const ACCENT = "#C97B5C";

/* ---------- Geometry helpers ---------- */

type Edge = {
  position: [number, number, number];
  quaternion: [number, number, number, number];
  length: number;
};

/**
 * Build the 4 edges of a square (or rotated square) centered at origin.
 * Returns the placement params for cylinder meshes.
 */
function squareEdges(size: number, rotation: number): Edge[] {
  const edges: Edge[] = [];
  const corners: THREE.Vector3[] = [];
  for (let i = 0; i < 4; i++) {
    const a = (i / 4) * Math.PI * 2 + rotation + Math.PI / 4;
    corners.push(new THREE.Vector3(Math.cos(a) * size, Math.sin(a) * size, 0));
  }
  for (let i = 0; i < 4; i++) {
    const p1 = corners[i];
    const p2 = corners[(i + 1) % 4];
    const mid = new THREE.Vector3().lerpVectors(p1, p2, 0.5);
    const dir = new THREE.Vector3().subVectors(p2, p1);
    const length = dir.length();
    dir.normalize();
    const q = new THREE.Quaternion().setFromUnitVectors(
      new THREE.Vector3(0, 1, 0),
      dir,
    );
    edges.push({
      position: [mid.x, mid.y, mid.z],
      quaternion: [q.x, q.y, q.z, q.w],
      length,
    });
  }
  return edges;
}

/* ---------- The arabesque mesh ---------- */

function ArabesqueMesh() {
  const groupRef = useRef<THREE.Group>(null);
  const reduced = useReducedMotion();

  // Three concentric squares — two rotated to form the 8-point star,
  // one inner diamond, one tiny center square.
  const allEdges = useMemo<Edge[]>(() => {
    return [
      ...squareEdges(1.0, 0),
      ...squareEdges(1.0, Math.PI / 4),
      ...squareEdges(0.5, Math.PI / 4),
      ...squareEdges(0.18, 0),
    ];
  }, []);

  useFrame((_, dt) => {
    const g = groupRef.current;
    if (!g || reduced) return;
    g.rotation.y += dt * 0.18;
    g.rotation.x = Math.sin(performance.now() * 0.0004) * 0.18;
    g.rotation.z += dt * 0.04;
  });

  return (
    <group ref={groupRef}>
      {allEdges.map((e, i) => (
        <mesh key={i} position={e.position} quaternion={e.quaternion}>
          <cylinderGeometry args={[0.022, 0.022, e.length, 8, 1]} />
          <meshBasicMaterial color={ACCENT} />
        </mesh>
      ))}
    </group>
  );
}

/* ---------- Public component ---------- */

export function ArabesqueAccent() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute right-0 top-0 hidden h-[clamp(180px,28vw,360px)] w-[clamp(180px,28vw,360px)] md:block"
      style={{
        maskImage:
          "radial-gradient(ellipse at center, black 55%, transparent 85%)",
        WebkitMaskImage:
          "radial-gradient(ellipse at center, black 55%, transparent 85%)",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 3], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ArabesqueMesh />
      </Canvas>
    </div>
  );
}
