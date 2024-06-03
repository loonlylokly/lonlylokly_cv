import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { Mesh } from "three";

export default function Wall(props: GroupProps) {
  const { nodes, materials } = useGLTF("/3DAssets/walls/wall.gltf");
  return (
    <group dispose={null} position={[0, 0, 0]} scale={[1, 1, 1]} {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.wall as Mesh).geometry}
        material={materials["texture"]}
      />
    </group>
  );
}

useGLTF.preload("/3DAssets/walls/wall.gltf");
