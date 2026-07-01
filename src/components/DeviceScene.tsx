import { Float, OrbitControls, RoundedBox } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

function PhoneModel() {
  return (
    <Float speed={1.8} rotationIntensity={0.5} floatIntensity={0.6}>
      <group rotation={[0.15, -0.42, 0.02]}>
        <RoundedBox args={[2.1, 3.8, 0.18]} radius={0.18} smoothness={8}>
          <meshStandardMaterial color="#101c17" metalness={0.48} roughness={0.28} />
        </RoundedBox>
        <RoundedBox args={[1.88, 3.42, 0.04]} radius={0.13} smoothness={8} position={[0, 0, 0.12]}>
          <meshStandardMaterial color="#07100c" roughness={0.4} />
        </RoundedBox>
        <mesh position={[0, -0.25, 0.16]}>
          <torusGeometry args={[0.74, 0.018, 18, 120]} />
          <meshStandardMaterial color="#d8ff63" emissive="#8bb63e" emissiveIntensity={0.3} />
        </mesh>
        <mesh position={[-0.52, -0.8, 0.18]}>
          <sphereGeometry args={[0.06, 24, 24]} />
          <meshStandardMaterial color="#d8ff63" emissive="#d8ff63" emissiveIntensity={0.6} />
        </mesh>
        <mesh position={[0.58, 0.45, 0.18]}>
          <sphereGeometry args={[0.06, 24, 24]} />
          <meshStandardMaterial color="#80f0c8" emissive="#80f0c8" emissiveIntensity={0.5} />
        </mesh>
      </group>
    </Float>
  );
}

export default function DeviceScene() {
  return (
    <div className="device-scene" aria-label="3D app preview">
      <Canvas camera={{ position: [0, 0, 6], fov: 40 }} dpr={[1, 2]}>
        <ambientLight intensity={1.8} />
        <directionalLight position={[3, 3, 5]} intensity={2.2} />
        <pointLight position={[-3, -2, 3]} intensity={2} color="#d8ff63" />
        <PhoneModel />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.7} />
      </Canvas>
      <div className="scene-chip top">React + Vite</div>
      <div className="scene-chip bottom">GitHub Pages</div>
    </div>
  );
}
