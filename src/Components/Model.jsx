import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import indoor from "https://drive.google.com/file/d/1gHfxbwDX_w0pFrysp8mmeBtjigU6w5z4/view?usp=sharing"
import gsap from "gsap";
import { useThree } from "@react-three/fiber";
 import {create} from 'zustand'
 export const useObjectStore = create((set) => ({
    object: {},
    setObject: (x) => set(() => ({ object: x })),
  }))
export function Model({submit,setSubmit}) {
  const { nodes, materials } = useGLTF(indoor);
  let { scene, camera } = useThree();
    let {setObject} = useObjectStore()
 const ref = useRef()
  return (
      
    <group  dispose={null}  onClick={(e) => {
        e.stopPropagation();
        if(e.object.parent.name === "Sofa" && e.object.name === "Sofa_Sofa_0"){
            let t1 = new gsap.timeline();
            console.log(e.object);
            setObject(ref.current)
            t1.to(camera.position, {
                x: 1,
                y: 1,
                z: -2,
                onUpdate: () => {
                  camera.lookAt(
                    -4.382128835196221,
                    -0.13527385671785375,
                    4.35679292678833
                  );
                },
                duration: 2,
              });
        }

      }}>
      <group
        name="Sketchfab_model"
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0.22846565, 0.22846568, 0.22846568]}
      >
        <group
          name="Modern_Living_Roomfbx"
          rotation={[Math.PI / 2, 0, 0]}
          scale={0.01}
        >
          <group
            name="AbstractArt"
            position={[-1334.37646484, 660.00006104, 10.00001431]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[170.00001526, 169.99998474, 272]}
          >
            <mesh
              name="AbstractArt_AbstractArt_0"
              castShadow
              receiveShadow
              geometry={nodes.AbstractArt_AbstractArt_0.geometry}
              material={materials.AbstractArt}
            />
          </group>
          <group
            name="CoffeeTable"
            position={[-100, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[100, 99.99999237, 99.99999237]}
          >
            <mesh
              name="CoffeeTable_CoffeeTable_0"
              castShadow
              receiveShadow
              geometry={nodes.CoffeeTable_CoffeeTable_0.geometry}
              material={materials.CoffeeTable}
            />
            <mesh
              name="CoffeeTable_CoffeeTable_0001"
              castShadow
              receiveShadow
              geometry={nodes.CoffeeTable_CoffeeTable_0001.geometry}
              material={materials.CoffeeTable}
            />
          </group>
          <group
            name="Lamp"
            position={[-900.00006104, 0, -900]}
            rotation={[-Math.PI / 2, 9e-8, -Math.PI / 9]}
            scale={[99.99999237, 100, 100]}
          >
            <pointLight color="yellow" intensity={0.2}  />

            <mesh
              name="Lamp_Lamp_0"
              castShadow
              receiveShadow
              geometry={nodes.Lamp_Lamp_0.geometry}
              material={materials.Lamp}
            />
          </group>
          <group
            name="PictureFrame"
            position={[-1216.28662109, 802.7208252, 480.00006104]}
            rotation={[-Math.PI / 2, -0.17453294, -1e-8]}
            scale={60.00000763}
          >
            <mesh
              name="PictureFrame_Material_0"
              castShadow
              receiveShadow
              geometry={nodes.PictureFrame_Material_0.geometry}
              material={materials["Material.001"]}
              position={[0, 0, 0.00000335]}
            />
          </group>
          <group
            name="Pillows"
            position={[-806.33422852, 147.04647827, 762.71307373]}
            rotation={[-Math.PI / 2, 1.39626351, 0.00000118]}
            scale={[80.6756134, 100, 99.45576477]}
          >
            <mesh
              name="Pillows_Pillows_0"
              castShadow
              receiveShadow
              geometry={nodes.Pillows_Pillows_0.geometry}
              material={materials.Pillows}
            />
          </group>
          <group
            name="Plant"
            position={[-1136.27111816, 634.51080322, 698.70184326]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={26.87999916}
          >
            <mesh
              name="Plant__0"
              castShadow
              receiveShadow
              geometry={nodes.Plant__0.geometry}
              material={materials.Plant__0}
              position={[-0.00000381, 0.00000288, -0.00000236]}
            />
          </group>
          <group
            name="Sofa"
            ref={ref}
            position={[-900.00006104, -29.15866661, 847.78637695]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[100, 99.99999237, 99.99999237]}
          >
            <mesh
              name="Sofa_Sofa_0"
              castShadow
              receiveShadow
              geometry={nodes.Sofa_Sofa_0.geometry}
              material={materials.Sofa}
              
            >
                {/* <meshPhysicalMaterial /> */}
            </mesh>
          </group>
          <group
            name="Structure"
            position={[0, 800, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[1174.80004883, 1076.90002441, 890.00006104]}
          >
            <mesh
              name="Structure_Structure_0"
              castShadow
              receiveShadow
              geometry={nodes.Structure_Structure_0.geometry}
              material={materials.Structure}
            />
            <mesh
              name="Structure_Structure_0001"
              castShadow
              receiveShadow
              geometry={nodes.Structure_Structure_0001.geometry}
              material={materials.Structure}
            />
            <mesh
              name="Structure_Structure_0002"
              castShadow
              receiveShadow
              geometry={nodes.Structure_Structure_0002.geometry}
              material={materials.Structure}
            />
            <mesh
              name="Structure_Structure_0003"
              castShadow
              receiveShadow
              geometry={nodes.Structure_Structure_0003.geometry}
              material={materials.Structure}
            />
            <mesh
              name="Structure_Structure_0004"
              castShadow
              receiveShadow
              geometry={nodes.Structure_Structure_0004.geometry}
              material={materials.Structure}
            />
            <mesh
              name="Structure_Structure_0005"
              castShadow
              receiveShadow
              geometry={nodes.Structure_Structure_0005.geometry}
              material={materials.Structure}
            />
          </group>
          <group
            name="TV"
            position={[200, 600, -1094.67089844]}
            rotation={[Math.PI / 2, 4e-8, -Math.PI]}
            scale={[-450, -25.00000572, -249.99998474]}
          >
            <mesh
              name="TV_TV_0"
              castShadow
              receiveShadow
              geometry={nodes.TV_TV_0.geometry}
              material={materials.material}
            />
          </group>
          <group
            name="TVStand"
            position={[200, 0, -1075.34997559]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[470.00006104, 110, 99.99999237]}
          >
            <mesh
              name="TVStand_TVStand_0"
              castShadow
              receiveShadow
              geometry={nodes.TVStand_TVStand_0.geometry}
              material={materials.TVStand}
            />
          </group>
          <group
            name="Windows"
            position={[0, 800, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[1174.80004883, 1076.90002441, 890.00006104]}
          >
            <mesh
              name="Windows_Windows_0"
              castShadow
              receiveShadow
              geometry={nodes.Windows_Windows_0.geometry}
              material={materials.Windows}
            />
          </group>
        </group>
      </group>
    </group>
    
  );
}

useGLTF.preload(indoor);