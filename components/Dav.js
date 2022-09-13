/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Dav(props) {
  const { nodes, materials } = useGLTF("/4D ROINTE.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[0, 0, Math.PI / 2]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["TQ2_ARD-geom"].geometry}
          material={materials.TQ2_ARD_front}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["TQ2_ARD-geom_1"].geometry}
          material={materials.TQ2_ARD_back}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes["TQ2_ARD-geom_2"].geometry}
          material={materials.TQ2_ARD_edge}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/4D ROINTE.gltf");
