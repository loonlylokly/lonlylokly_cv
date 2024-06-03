import { useAnimations, useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Group, Mesh, Object3DEventMap } from "three";

const ANIMATION_FADE_TIME = 0.5;

export const Mage = (props: GroupProps) => {
  const refMage = useRef<Group<Object3DEventMap>>(null);
  const { nodes, materials, scene, animations } = useGLTF(
    "/3DAssets/characters/Mage_l.glb"
  );
  const { actions, mixer } = useAnimations(animations, refMage);

  useEffect(() => {
    actions["Idle"]?.reset().play();
  }, []);

  return (
    <group
      dispose={null}
      position={[0, 0, 0]}
      scale={[1, 1, 1]}
      {...props}
      ref={refMage}
    >
      <primitive object={scene} />
      {/* <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Mage_ArmLeft as Mesh).geometry}
        material={materials["mage_texture"]}
        position={(nodes.Mage_ArmLeft as Mesh).position}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Mage_ArmRight as Mesh).geometry}
        material={materials["mage_texture"]}
        position={(nodes.Mage_ArmRight as Mesh).position}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Mage_Body as Mesh).geometry}
        material={materials["mage_texture"]}
        position={(nodes.Mage_Body as Mesh).position}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Mage_Head as Mesh).geometry}
        material={materials["mage_texture"]}
        position={(nodes.Mage_Head as Mesh).position}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Mage_LegLeft as Mesh).geometry}
        material={materials["mage_texture"]}
        position={(nodes.Mage_LegLeft as Mesh).position}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes.Mage_LegRight as Mesh).geometry}
        material={materials["mage_texture"]}
        position={(nodes.Mage_LegRight as Mesh).position}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={(nodes["1H_Wand"] as Mesh).geometry}
        material={materials["mage_texture"]}
        position={(nodes["1H_Wand"] as Mesh).position}
      /> */}
    </group>
  );
};

useGLTF.preload("/3DAssets/characters/Mage_l.glb");
