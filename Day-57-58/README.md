# Day 57–58: React Context API

## Overview

The React Context API is a feature that allows you to share data globally between components without passing props manually at every level (prop drilling). It is primarily used for managing application-wide state such as themes, language preferences, authentication data, or user information.

## What is Context API?

Context API provides a way to pass data through the component tree without having to pass props down manually at every level. This helps avoid the "prop drilling" problem where you need to pass data through many intermediate components that don't actually use the data themselves.

Common use cases include:
- Theme switching (light/dark mode)
- Authentication data (user info, tokens)
- Multi-language (i18n) setup
- Application-level state management
- Cart or shopping state

## Basic Flow

The Context API follows a three-step process:

1. **Create a Context** - Define the context using `createContext()`
2. **Provide the Context** - Wrap your component tree with a `Provider` component
3. **Consume the Context** - Access the context value in any child component

## Step-by-Step Example

### 1. Create Context

First, create a context using `createContext()`:

```jsx
import React, { createContext } from "react";

export const UserContext = createContext();
```

### 2. Provide Context

Wrap your component tree with the `Provider` component and pass the value you want to share:

```jsx
function App() {
  const user = { name: "Alice", age: 25 };

  return (
    <UserContext.Provider value={user}>
      <Home />
    </UserContext.Provider>
  );
}
```

### 3. Consume Context

You can consume the context in two ways:

#### A. Using `useContext` Hook (Recommended)

The `useContext` hook is the modern and preferred way to access context:

```jsx
import React, { useContext } from "react";
import { UserContext } from "./App";

function Home() {
  const user = useContext(UserContext);
  return <h2>Welcome, {user.name}!</h2>;
}
```

#### B. Using Context Consumer

Alternatively, you can use the `Consumer` component (less common in modern React):

```jsx
<UserContext.Consumer>
  {(user) => <h2>Hello, {user.name}</h2>}
</UserContext.Consumer>
```

## When to Use Context

### ✅ Ideal Use Cases

Context API is well-suited for:

- **Theme switching** (light/dark mode)
- **Authentication data** (user info, tokens)
- **Multi-language (i18n) setup**
- **Cart or app-level state**
- **User preferences** that need to be accessed across multiple components

### ❌ When to Avoid

Avoid using Context API for:

- **Frequently updated data** - Can cause unnecessary re-renders across all consumers
- **Deeply dynamic states** - Consider using Redux, Zustand, or other state management libraries
- **Data that only a few components need** - Regular props might be simpler
- **Performance-critical applications** - Context updates can trigger re-renders in all consuming components

## Practice Task

### Theme Switcher App

Build a small theme switcher application that demonstrates the Context API.

#### Requirements

- A button that toggles between light and dark mode
- Use Context API to share the theme across all components
- Theme should persist across component re-renders

#### Suggested Components

- `App` - Main application component with theme provider
- `Navbar` - Navigation bar that displays theme toggle button
- `Content` - Content area that adapts to current theme

#### Implementation Hints

1. Create a `ThemeContext` with:
   - Current theme state (e.g., "light" or "dark")
   - `toggleTheme` function to switch between themes

2. Use CSS classes or inline styles to change background/text colors based on theme value

3. Wrap your component tree with `ThemeContext.Provider`

4. Access the theme and toggle function in child components using `useContext`

## Key Takeaways

- Context API helps avoid prop drilling by providing a way to share data globally
- Use `<Context.Provider value={...}>` at a high level in your component tree
- Retrieve data with `useContext(Context)` hook in functional components
- Context is best for global but not frequently changing data
- Consider performance implications when using Context for frequently updated state

## Additional Resources

- [React Context API Documentation](https://react.dev/reference/react/useContext)
- [React Context Provider Documentation](https://react.dev/reference/react/createContext)
