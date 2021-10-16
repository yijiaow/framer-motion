import './style.css';
import * as THREE from 'three';
import * as dat from 'dat.gui';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// Debug
const gui = new dat.GUI();

// Canvas
const canvas = document.querySelector('canvas.webgl');

// Scene
const scene = new THREE.Scene();

// Objects
const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);

// Meterials
const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });

// Mesh
const torusKnot = new THREE.Mesh(geometry, material);
scene.add(torusKnot);

// Camera
