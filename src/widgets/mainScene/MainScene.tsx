"use client";
import { Mage } from "@/entities/characters/Mage";
import BoxStacked from "@/entities/staff/BoxStacked";
import ChestGold from "@/entities/staff/ChestGold";
import CoinStackLarge from "@/entities/staff/CoinStackLarge";
import CoinStackSmall from "@/entities/staff/CoinStackSmall";
import Torch from "@/entities/staff/Torch";
import FloorTileLarge from "@/entities/walls/FloorTileLarge";
import Wall from "@/entities/walls/Wall";
import WallArched from "@/entities/walls/WallArched";
import WallCorner from "@/entities/walls/WallCorner";
import WallDoor from "@/entities/walls/WallDoor";
import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import style from "./MainScene.module.css";

export const MainScene = () => {
  return (
    <div className={style.mainscene} id="canvas-container">
      <Canvas>
        <PerspectiveCamera
          makeDefault
          fov={50}
          near={0.1}
          far={1000}
          position={[8, 3, 12.5]}
          rotation={[
            (-17 * Math.PI) / 180,
            (37 * Math.PI) / 180,
            (11 * Math.PI) / 180,
          ]}
        />
        <ambientLight color="#89AFFF" intensity={0.2} />
        <directionalLight
          color="#675cff"
          intensity={0.2}
          position={[4, 12, 3]}
        />
        <Mage position={[5, 0, 6.6]} rotation={[0, 0.5, 0]} />
        <WallCorner position={[-2.5, 0, 0]} rotation={[0, 1.5708, 0]} />
        <WallArched position={[1.5, 0, 0]} />
        <WallDoor position={[-2.5, 0, 8]} rotation={[0, 1.5708, 0]} />
        <Wall position={[-2.5, 0, 4]} rotation={[0, 1.5708, 0]} />
        <Wall position={[-2.5, 0, 12]} rotation={[0, 1.5708, 0]} />
        <Wall position={[5.5, 0, 0]} />
        <Wall position={[9.5, 0, 0]} />
        <FloorTileLarge position={[0, -0.05, 2.5]} />
        <FloorTileLarge position={[0, -0.05, 6.5]} />
        <FloorTileLarge position={[0, -0.05, 10.5]} />
        <FloorTileLarge position={[4, -0.05, 2.5]} />
        <FloorTileLarge position={[4, -0.05, 6.5]} />
        <FloorTileLarge position={[4, -0.05, 10.5]} />
        <FloorTileLarge position={[8, -0.05, 2.5]} />
        <FloorTileLarge position={[8, -0.05, 6.5]} />
        <FloorTileLarge position={[8, -0.05, 10.5]} />
        <Torch
          position={[-2, 2, 6.7]}
          rotation={[0, 0, -0.436]}
          delta={3}
          initIntensity={6}
        />
        <Torch position={[3.3, 2, 0.4]} rotation={[0, 4.71, -0.436]} />
        <BoxStacked position={[0, 0, 2.5]} rotation={[0, 0.855, 0]} />
        <CoinStackLarge position={[6, 0, 2]} />
        <CoinStackSmall position={[2, 0, 4.5]} />
        <ChestGold position={[-0.7, 0, 5.6]} rotation={[0, 1.047, 0]} />
        <Torch
          position={[9, 2, 8]}
          rotation={[0, 0, -0.436]}
          delta={3}
          initIntensity={10}
        />
      </Canvas>
    </div>
  );
};
