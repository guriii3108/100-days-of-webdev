# 🎨 Day 37 / 100 — Exploring Tailwind CSS

## 📘 What is Tailwind CSS?
Tailwind is a utility-first CSS framework—rather than writing custom CSS classes, you use pre-built utility classes directly in your HTML/JSX.

### Traditional CSS Example
```css
.button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
}
```

### Tailwind CSS Example
```html
<button class="bg-blue-500 text-white px-5 py-2 rounded">
  Click Me
</button>
```

- ✅ No need to name classes
- ✅ Faster development
- ✅ Consistent design system

---

## 🧩 Core Concepts

### 1️⃣ Utility Classes
Every CSS property has a corresponding utility class:

- `text-center` → `text-align: center`
- `bg-red-500` → background: red (shade 500)
- `p-4` → padding: 1rem
- `mt-2` → margin-top: 0.5rem

### 2️⃣ Responsive Design
Add breakpoints directly in class names:

```html
<div class="text-sm md:text-lg lg:text-2xl">
  Responsive Text
</div>
```
- `md:` → medium screens (768px+)
- `lg:` → large screens (1024px+)

### 3️⃣ Hover & Focus States
```html
<button class="bg-blue-500 hover:bg-blue-700 focus:ring-2">
  Hover Me
</button>
```

### 4️⃣ Flexbox & Grid Made Easy
**Flex Example:**
```html
<div class="flex justify-center items-center gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</div>
```

**Grid Example:**
```html
<div class="grid grid-cols-3 gap-4">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

---

## ⚙️ Setup (Quick Start)
### Via CDN (for practice)
```html
<script src="https://cdn.tailwindcss.com"></script>
```
### For real projects (with npm)
```bash
npm install -D tailwindcss
npx tailwindcss init
```

---

## 🎨 Common Utility Examples

| Property      | Tailwind Class                | CSS Equivalent                  |
|-------------- |------------------------------|---------------------------------|
| Width         | `w-64`                        | width: 16rem                    |
| Height        | `h-screen`                    | height: 100vh                   |
| Text Color    | `text-gray-700`               | color: #374151                  |
| Font Size     | `text-xl`                     | font-size: 1.25rem              |
| Border        | `border-2 border-blue-500`    | border: 2px solid blue          |
| Shadow        | `shadow-lg`                   | box-shadow: ...                  |
| Rounded       | `rounded-full`                | border-radius: 9999px            |

---

## 🧑‍💻 Practice Tasks
- [x] Create a Card Component using Tailwind
- [x] Build a Navbar with flex utilities
- [x] Design a Button Set (primary, secondary, danger)
- [x] Make a responsive grid layout (3 cols on desktop, 1 on mobile)
- [x] Add hover effects and transitions

---

## 💡 Why Tailwind?
- ✅ No need to switch between HTML & CSS files
- ✅ Faster prototyping
- ✅ Consistent design tokens (colors, spacing)
- ✅ Works amazingly with React
- ✅ Mobile-first by default

---

## 📝 End of Day Reflection
- [x] I understand utility-first CSS philosophy
- [x] I can use Tailwind classes for layout & styling
- [x] I'm ready to use it in my upcoming projects