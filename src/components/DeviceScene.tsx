import { Float, OrbitControls, RoundedBox, useTexture } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { SRGBColorSpace } from 'three';

const screenshotPath = '/equilibriumpress/projects/waymarked-trails-map.PNG';

function PhoneModel() {
  const screenTexture = useTexture(screenshotPath);
  screenTexture.colorSpace = SRGBColorSpace;

  return (
    <Float speed={1.8} rotationIntensity={0.5} floatIntensity={0.6}>
      <group rotation={[0.15, -0.42, 0.02]}>
        <RoundedBox args={[2.1, 3.8, 0.18]} radius={0.18} smoothness={8}>
          <meshStandardMaterial color="#101c17" metalness={0.48} roughness={0.28} />
        </RoundedBox>
        <RoundedBox args={[1.88, 3.42, 0.04]} radius={0.13} smoothness={8} position={[0, 0, 0.12]}>
          <meshBasicMaterial map={screenTexture} toneMapped={false} />
        </RoundedBox>
        <mesh position={[0, 1.52, 0.16]}>
          <boxGeometry args={[0.58, 0.12, 0.03]} />
          <meshStandardMaterial color="#050807" roughness={0.4} />
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
      <div className="scene-chip top">Waymarked Trails</div>
      <div className="scene-chip bottom">iOS route app</div>
    </div>
  );
}
