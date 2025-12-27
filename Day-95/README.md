# Day 95 – 🚀 Today's Progress: Pixly

Date: December 27, 2025

## 📝 Summary

Today, I laid the groundwork for **Pixly**, a powerful media discovery application. I set up the project structure, integrated key APIs, and implemented the core state management using Redux Toolkit.

## 🛠️ Tech Stack & Tools

-   **Framework**: React + Vite
-   **State Management**: Redux Toolkit
-   **Styling**: Tailwind CSS (implied by class names like `bg-zinc-900`, `text-white`)
-   **APIs**: Unsplash (Photos), Pexels (Videos), Tenor (GIFs)

## ✨ key Achievements

### 1. Project Initialization & Configuration

-   Project named as **Pixly**.
-   Configured `.gitignore` for a clean repository.
-   Updated `README.md` with project vision and features.

### 2. State Management (Redux Toolkit)

-   Created `searchSlice.js` to manage:
    -   Search queries (`query`)
    -   Active media tabs (`activeTab`)
    -   Search results (`results`)
    -   Loading and error states
-   Configured the global Redux `store.js`.

### 3. API Integration Layer

-   Built `api/mediaApi.js` to handle external requests:
    -   `fetchPhotos`: Unsplash API
    -   `fetchVideos`: Pexels API
    -   `fetchGifs`: Tenor API
-   Handled API keys using environment variables (`import.meta.env`).

### 4. Component Development

-   **Tabs.jsx**: Created a navigation component to switch between Gifs, Photos, and Videos. Added hover effects and active state styling.
-   **SearchBar.jsx**: Implemented a two-way bound search input that dispatches queries to the Redux store.
-   **ResultGrid.jsx**: Implemented the data fetching logic based on the active tab and search query. (Currently logging data to console, ready for UI implementation).

### 5. Main Application Layout

-   Assembled the core components (`SearchBar`, `Tabs`, `ResultGrid`) in `App.jsx`.
-   Applied a dark mode theme (`bg-zinc-900`) for a sleek, modern look.

## 🔜 Next Steps

-   Render the fetched results in a responsive masonry grid.
-   Add pagination or infinite scroll.
-   Implement a modal for viewing media in full screen.
