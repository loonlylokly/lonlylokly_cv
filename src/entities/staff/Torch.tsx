"use client";
import { useGLTF } from "@react-three/drei";
import { GroupProps, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh, PointLight } from "three";

type TProps = {
  delta?: number;
  initIntensity?: number;
} & GroupProps;

export default function Torch({
  delta = 2.5,
  initIntensity = 9,
  ...props
}: TProps) {
  const refTorchLight = useRef<PointLight>(null);
  const { nodes, materials } = useGLTF("/3DAssets/staff/torch.gltf");
  useFrame(({ clock }) => {
    const state =
      Math.sin(clock.getElapsedTime() * 5) * delta +
      13 +
      Math.floor(Math.random() * 2);
    // console.log(state, delta);
    if (refTorchLight.current !== null) {
      refTorchLight.current.intensity = state;
    }
  });
  return (
    <group dispose={null} position={[0, 0, 0]} scale={[1, 1, 1]} {...props}>
      <pointLight
        color="#C86500"
        position={[0.23, 0.5, 0]}
        castShadow
        receiveShadow
        ref={refTorchLight}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.torch as Mesh).geometry}
        material={materials["texture"]}
      />
    </group>
  );
}

useGLTF.preload("/3DAssets/staff/torch.gltf");
