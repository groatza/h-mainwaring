import React from 'react'
import { useRef } from "react";
import { Mesh, TextureLoader, DoubleSide } from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrthographicCamera, PerspectiveCamera } from '@react-three/drei';
import img from "/src/assets/profile_circle.png";
/*
export default function ProfileImage() {

    useFrame(() => {
        console.log("hemlo")
    });

    return (
        <Canvas>
            <mesh>
                <boxGeometry />
                <meshStandardMaterial />
            </mesh>
        </Canvas>
    );
}
*/

function Plane() {
    const myMesh = useRef(); //useRef<Mesh>(null)?
    const texture = useLoader(TextureLoader, img);
    //myMesh.current.rotation.x = 0.1;
    useFrame(() => {
        if (!myMesh.current) {
            return;
        }
        //myMesh.current.rotation.z = -(Math.PI / 4);
        //myMesh.current.rotation.x += 0.01;
        myMesh.current.rotation.y += 0.01;
    });

    return (
        <mesh ref={myMesh}>
            <planeGeometry args={[5,5]}/>
            <meshBasicMaterial map={texture} side={DoubleSide} transparent={true}/>
        </mesh>
    );
}

function Floor() {
    const floor = useRef();
    useFrame(() => {
        if (!floor.current) {
            return;
        }
        floor.current.rotation.x = -(Math.PI /3);
    })

    return (
        <mesh ref={floor}>
            <planeGeometry args={[5,5]} position={[-1,0,5]}/>
            <meshBasicMaterial color="white"/>
        </mesh>
    );
}


export default function ProfileImage() {
    return (
        <Canvas>
            <OrthographicCamera makeDefault zoom={50} position={[0,0,5]}/>
            <pointLight position={[0,0,0]} />
            <Plane />
        </Canvas>
    );
}
