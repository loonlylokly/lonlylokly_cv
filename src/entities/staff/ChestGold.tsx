import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { Mesh } from "three";

export default function ChestGold(props: GroupProps) {
  const { nodes, materials } = useGLTF("/3DAssets/staff/chest_gold.gltf");
  return (
    <group dispose={null} position={[0, 0, 0]} scale={[1, 1, 1]} {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.chest_gold as Mesh).geometry}
        material={materials["texture"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.chest_gold_lid as Mesh).geometry}
        material={materials["texture"]}
        position={(nodes.chest_gold_lid as Mesh).position}
      />
    </group>
  );
}

useGLTF.preload("/3DAssets/staff/chest_gold.gltf");
