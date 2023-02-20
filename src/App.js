import React, { useState, useEffect, useRef, Suspense } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Text, Stats, Environment } from "@react-three/drei";
import { io } from "socket.io-client";
import "./App.css";
import { Model, useObjectStore } from "./Components/Model";
import gsap from "gsap";
import * as THREE from "three";


const UserWrapper = ({ objName, material }) => {
  let { scene } = useThree();

  if (objName !== undefined) {
    const sofa = scene.getObjectByName("Sofa");
    if (sofa.name === objName) {
      if (material === "blue") {
        sofa.children[0].material.color = new THREE.Color("blue");
        sofa.children[0].material.emissive = new THREE.Color("skyblue");
      }else if(material === "pink"){
        sofa.children[0].material.color = new THREE.Color("hotpink");
        sofa.children[0].material.emissive = new THREE.Color("pink");
      }
      else if(material === "red"){
        sofa.children[0].material.color = new THREE.Color("crimson");
        sofa.children[0].material.emissive = new THREE.Color("red");
      }
    }
  }

  return <></>;
};

function App() {
  const [socketClient, setSocketClient] = useState(null);
  const [clients, setClients] = useState({});
  const { object } = useObjectStore();
  let [submit, setSubmit] = useState(0);

  const onControlsChange = (e, color) => {
    const { id } = socketClient;
    socketClient.emit("move", {
      id,
      objName: "Sofa",
      material: color,
    });
  };
  useEffect(() => {
    setSocketClient(io("http://192.168.0.109:4000"));

    return () => {
      if (socketClient) socketClient.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socketClient) {
      socketClient.on("move", (clients) => {
        setClients(clients);
      });
    }
  }, [socketClient]);

  return (
    <div className="App">
      {object && object.name === "Sofa" && (
        <div className="materialSelect">
          
          <h1 className="title">{object.name}</h1>
          <div className="materials">
            <span
              className="blue"
              onClick={(e) => {
                object.children[0].material.color = new THREE.Color("blue");
                object.children[0].material.emissive = new THREE.Color(
                  "skyblue"
                );
                setSubmit(0);
                onControlsChange(e, "blue");
              }}
            >
              Blue
            </span>
            <span
              className="red"
              onClick={(e) => {
                object.children[0].material.color = new THREE.Color("crimson");
                object.children[0].material.emissive = new THREE.Color("red");
                setSubmit(0);
                onControlsChange(e, "red");              }}
            >
              Red
            </span>
            <span
              className="pink"
              onClick={(e) => {
                object.children[0].material.color = new THREE.Color("hotpink");
                object.children[0].material.emissive = new THREE.Color("pink");
                setSubmit(0);
                onControlsChange(e, "pink");
              }}
            >
              Pink
            </span>
          </div>
        </div>
      )}
      {socketClient && (
        <Canvas camera={{ position: [2.5, 1.5, -1], near: 0.1, fov: 75 }}>
       
          {/* <gridHelper rotation={[0, 0, 0]} /> */}
          <directionalLight />
          <Suspense fallback={null}>
          <Environment preset={"city"} background />

          <Model submit={submit} setSubmit={setSubmit} />
          </Suspense>
          {Object.keys(clients)
            .filter((clientKey) => clientKey !== socketClient.id)
            .map((client) => {
              const { objName, material } = clients[client];

              return (
                <UserWrapper
                  key={client}
                  id={client}
                  objName={objName}
                  material={material}
                />
              );
            })}
        </Canvas>
      )}{" "}
    </div>
  );
}

export default App;
