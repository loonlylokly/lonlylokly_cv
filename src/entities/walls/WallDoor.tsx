import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { Mesh } from "three";

export default function WallDoor(props: GroupProps) {
  const { nodes, materials } = useGLTF("/3DAssets/walls/wall_doorway.gltf");
  return (
    <group position={[0, 0, 0]} dispose={null} scale={[1, 1, 1]} {...props}>
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.wall_doorway as Mesh).geometry}
        material={materials["texture"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.wall_doorway_door as Mesh).geometry}
        material={materials["texture"]}
        position={[-0.82, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/3DAssets/walls/wall_doorway.gltf");
