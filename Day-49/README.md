# Day 49 - React Hooks Practice Project

## Overview

Today was not about learning something new; it was about practicing the React patterns I have studied over the past few days. I built a small project that leans on useRef, useState, and useEffect working together inside function components.

## Key Features

- State management with `useState` to track UI controls, toggles, and form values.
- Side effects with `useEffect` to coordinate timers, data sync, and cleanup logic.
- Direct DOM access with `useRef` for focus management and values that do not need re-renders.
- Small patterns from prior lessons such as conditional rendering and controlled inputs.

## Implementation Notes

- Broke UI concerns into focused components to keep each hook usage clear.
- Used multiple `useEffect` calls with targeted dependency arrays instead of a single catch-all effect.
- Applied `useRef` to store mutable values between renders while avoiding unnecessary updates.
- Kept state updates predictable by centralising setter calls and avoiding direct mutation.

## Tech Stack

- React with functional components and hooks
- Vite and TypeScript for tooling and DX
- CSS Modules for scoped styles

## What I Practiced

- Translating notes into working code quickly.
- Thinking through effect lifecycles and when cleanup functions are required.
- Deciding between `useState` and `useRef` based on whether UI updates are needed.
- Documenting the project so the intent behind each hook remains clear.

## Next Steps

- Extend the project with widgets that use `useReducer` and `useMemo` for more complex state.
- Add lightweight tests with React Testing Library to verify hook-driven behaviours.
- Explore performance profiling once the component tree grows.

---

If you are following along with my #100DaysOfWebDev journey, this repository captures both the concepts learned and how they are applied. Feedback and pairing ideas are always welcome.

