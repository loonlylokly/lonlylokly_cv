import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { Mesh } from "three";

export default function CoinStackSmall(props: GroupProps) {
  const { nodes, materials } = useGLTF("/3DAssets/staff/coin_stack_small.gltf");
  return (
    <group dispose={null} position={[0, 0, 0]} scale={[1, 1, 1]} {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.coin_stack_small as Mesh).geometry}
        material={materials["texture"]}
      />
    </group>
  );
}

useGLTF.preload("/3DAssets/staff/coin_stack_small.gltf");
