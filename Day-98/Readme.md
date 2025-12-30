# Day 98/100 – Immersive 3D Experiences with React Three Fiber 🧊

**Date:** December 30, 2025  
**Focus:** 3D Graphics, Animation, & Interactive UI

---

## 🚀 Overview

After strengthening backend security and authentication mechanisms on [Day 97](../Day-97/README.md), today I shifted gears completely to the frontend to explore **Creative Development**. I dived into **React Three Fiber (R3F)**, a React renderer for Three.js, to bring 3D elements into the web browser.

The goal was to break the monotony of standard 2D layouts and understand how to manipulate scenes, cameras, and meshes declaratively within the React ecosystem.

## 🛠️ Tech Stack & Libraries

-   **React Three Fiber (@react-three/fiber)**: The core renderer.
-   **React Three Drei (@react-three/drei)**: A collection of useful helpers (OrbitControls, Stars, etc.).
-   **Three.js**: The underlying 3D engine.
-   **Vite**: For rapid prototyping.

## 📚 Key Concepts Explored

### 1. The Canvas

Acting as the entry point for the Three.js scene. Unlike a standard HTML `<canvas>`, the `R3F` Canvas handles the render loop automatically.

### 2. Meshes & Geometries

Understanding that a 3D object is composed of:

-   **Geometry**: The shape (e.g., `boxGeometry`, `sphereGeometry`).
-   **Material**: The skin/appearance (e.g., `meshStandardMaterial`).

### 3. Lighting & Shadows

A scene is pitch black without light. I experimented with:

-   **AmbientLight**: Global illumination.
-   **SpotLight** / **PointLight**: Directional lighting that casts shadows.

### 4. Animation

Using the `useFrame` hook to tap into the render loop for smooth rotation and pulsation effects, distinct from CSS animations.

## 💡 Code Snippet: A Rotating Cube

A fundamental component created today:

```jsx
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

function RotatingBox(props) {
    const meshRef = useRef();
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);

    // Rotate mesh every frame
    useFrame((state, delta) => (meshRef.current.rotation.x += delta));

    return (
        <mesh
            {...props}
            ref={meshRef}
            scale={active ? 1.5 : 1}
            onClick={() => setActive(!active)}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
        </mesh>
    );
}
```

## 🔄 Revision Comparison

| **Feature**        | **Day 97 (Yesterday)** | **Day 98 (Today)**          |
| :----------------- | :--------------------- | :-------------------------- |
| **Primary Domain** | Backend & Security     | Creative Frontend           |
| **Key Tech**       | Mongoose, JWT, Express | Three.js, WebGL             |
| **Visual Output**  | Standard Forms/JSON    | 3D Canvas, Animations       |
| **Logic Type**     | Auth Flow, Middleware  | Render Loops, Spatial Logic |

## ✅ Outcome

Built a simple "Digital Showroom" prototype where users can rotate and interact with 3D objects. This opens the door for more immersive landing pages and product visualizations in future projects.
