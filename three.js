import * as THREE from 'three';

let canvas = document.getElementById('canvas');
let canvasWidth = canvas.offsetWidth;
let canvasHeight = canvas.offsetHeight;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveLiveCamera(75, canvasWidth / canvasHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer(); //WebGL1?
renderer.setSize(canvasWidth, canvasHeight);
canvas.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 5;