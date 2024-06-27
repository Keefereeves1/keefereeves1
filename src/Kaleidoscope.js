// Kaleidoscope.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Kaleidoscope = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const width = mount.clientWidth;
    const height = mount.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    mount.appendChild(renderer.domElement);

    const geometry = new THREE.PlaneGeometry(2, 2);
    const texture = new THREE.TextureLoader().load('path-to-your-image.jpg');
    const material = new THREE.MeshBasicMaterial({ map: texture });
    const plane = new THREE.Mesh(geometry, material);
    scene.add(plane);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      plane.rotation.z += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="kaleidoscope-container"></div>;
};

export default Kaleidoscope;
