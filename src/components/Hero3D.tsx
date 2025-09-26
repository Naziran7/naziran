import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Box, Torus, OrbitControls, Text } from "@react-three/drei";
import * as THREE from "three";

const FloatingShape = ({ position, shape }: { position: [number, number, number]; shape: "sphere" | "box" | "torus" }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  const material = (
    <meshStandardMaterial
      color="#00D4FF"
      emissive="#001122"
      emissiveIntensity={0.5}
      transparent
      opacity={0.8}
    />
  );

  return (
    <mesh ref={meshRef} position={position}>
      {shape === "sphere" && <Sphere args={[1, 32, 32]}>{material}</Sphere>}
      {shape === "box" && <Box args={[1.5, 1.5, 1.5]}>{material}</Box>}
      {shape === "torus" && <Torus args={[1, 0.4, 16, 100]}>{material}</Torus>}
    </mesh>
  );
};

const Hero3DScene = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 75 }}
      className="w-full h-full"
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00D4FF" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#A855F7" />
      
      <FloatingShape position={[-4, 2, 0]} shape="sphere" />
      <FloatingShape position={[4, -1, 2]} shape="box" />
      <FloatingShape position={[0, 3, -2]} shape="torus" />
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </Canvas>
  );
};

export default Hero3DScene;