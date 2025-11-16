# 💸 Expense Tracker App - Day 53-54 of 100 Days of Web Dev

> **Journey Progress:** Day 53-54 | Building a full-featured React Expense Tracker to practice and consolidate everything I've learned so far! 🚀

---

## 📖 About This Project

This is my **Day 53-54 project** in my 100 Days of Web Development journey. I built a complete Expense Tracker application using React to practice and consolidate all the concepts I've learned including:

- ✅ React Components & Props
- ✅ State Management (useState)
- ✅ Side Effects (useEffect)
- ✅ React Router for navigation
- ✅ Form Handling
- ✅ LocalStorage persistence
- ✅ Conditional Rendering
- ✅ Modern UI with Tailwind CSS

---

## ✨ Features Implemented

### Core Features
- ➕ **Add Expenses** - Add new expenses with title, amount, category, and date
- 📋 **View All Expenses** - Beautiful card-based list showing all expenses
- 🗑️ **Delete Expenses** - Remove expenses with one click
- 🗂️ **Filter by Category** - Filter expenses by category (Food, Transport, Shopping, etc.)
- 💰 **Budget Management** - Set and track your monthly budget
- 📊 **Statistics Page** - Detailed analytics including:
  - Total expenses, items, and average
  - Highest and lowest expenses
  - Category-wise breakdown with visual progress bars
  - Top spending category
- 💾 **LocalStorage Persistence** - All data automatically saved and loaded
- 🧭 **Multi-page Routing** - Home page and Stats page with navigation
- 📱 **Fully Responsive** - Works perfectly on mobile, tablet, and desktop

### UI/UX Features
- 🎨 **Modern Dark Theme** - Professional black background (#19191C cards)
- 🌈 **Color-Coded Actions**:
  - 🔵 Blue buttons for add/submit actions
  - 🔴 Red buttons for delete actions
  - 🟢 Green for positive states
  - 🟠 Orange for spending indicators
  - 🟣 Purple for analytics
- ✨ **Smooth Animations** - Hover effects, transitions, and interactive elements
- 💳 **Indian Rupee (₹)** - Currency support with proper formatting
- 📈 **Budget Progress Bar** - Visual indicator with color-coded warnings
- 🎯 **Budget Setup Modal** - Initial setup flow for new users

---

## 🛠️ Technologies Used

- **React 18.3** - UI library
- **React Router DOM 6.26** - Client-side routing
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Vite 5.4** - Build tool and dev server
- **LocalStorage API** - Client-side data persistence

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone or download this repository**
   ```bash
   cd Day-53-54
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173` (or the port shown in terminal)
   - You'll be prompted to set your monthly budget first!

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

---

## 📁 Project Structure

```
Day-53-54/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar
│   │   ├── ExpenseForm.jsx     # Add expense form
│   │   ├── ExpenseList.jsx     # List of expenses with filter
│   │   ├── ExpenseItem.jsx     # Individual expense card
│   │   └── BudgetSetup.jsx     # Budget setup modal
│   ├── pages/
│   │   ├── Home.jsx            # Main page with budget summary
│   │   ├── Stats.jsx           # Statistics and analytics
│   │   └── NotFound.jsx        # 404 page
│   ├── App.jsx                 # Main app component with routing
│   ├── main.jsx                # Entry point
│   └── index.css               # Tailwind CSS imports deployment
├── package.json
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind configuration
```

---

## 🎯 Key Concepts Practiced

### State Management
- **useState** - Managing expenses, budget, form inputs
- **useEffect** - Syncing data with localStorage on load/save
- **Props** - Passing data and callbacks between components

### React Router
- **BrowserRouter** - Client-side routing setup
- **Routes & Route** - Defining routes
- **Link & useLocation** - Navigation and active state handling
- **NotFound Page** - Handling 404 errors

### Form Handling
- Controlled inputs with React state
- Form validation
- Form submission and data processing

### Data Persistence
- Loading data from localStorage on mount
- Saving data to localStorage on changes
- Handling empty states gracefully

---

## 🎨 Design Decisions

### Color Scheme
- **Background**: Pure black (#000000) - Professional and modern
- **Cards**: Dark gray (#19191C) - Subtle contrast
- **Actions**: 
  - Blue (#3B82F6) for primary actions
  - Red (#EF4444) for destructive actions
  - Green/Orange/Purple for status indicators

### User Experience
- Modal for budget setup (better onboarding)
- Visual feedback on hover states
- Color-coded progress bars for budget usage
- Empty states with helpful messages
- Smooth transitions and animations

---

## 📊 Project Statistics

- **Components Created**: 8
- **Pages**: 3 (Home, Stats, NotFound)
- **Features**: 10+
- **Lines of Code**: ~800+

---

## 🎓 What I Learned

This project helped me practice:

1. **Component Architecture** - Organizing code into reusable components
2. **State Management** - Managing complex state across multiple components
3. **Routing** - Implementing multi-page navigation in SPA
4. **Data Persistence** - Using localStorage effectively
5. **Modern UI/UX** - Building professional interfaces with Tailwind
6. **Project Structure** - Organizing a React project properly
7. **Deployment** - Setting up CI/CD for GitHub Pages

---

## 🔮 Future Enhancements

Ideas for extending this project:
- 📊 Charts and graphs using Recharts or Chart.js
- 🔍 Search functionality
- 📅 Date range filtering
- 📱 PWA support (offline functionality)
- 🌙 Light/Dark mode toggle
- 💾 Export data to CSV/JSON
- 📧 Email summaries
- 🏷️ Custom categories
- 📈 Budget goals and alerts

---

## 📝 Journey Reflection

**Day 53-54:** This project was a great milestone in my journey! I successfully built a complete, production-ready expense tracking application. The experience of combining all my React knowledge into one cohesive project was incredibly rewarding. 

The app looks professional, works smoothly, and I'm proud to add it to my portfolio. On to the next project! 🎯

**Progress: 54/100 Days** - Over halfway there! 💪

---
## 🤝 Contributing
This is a personal learning project, but feel free to fork it and make it your own!

---

## 📄 License

This project is part of my personal 100 Days of Web Dev journey. Feel free to use it for learning purposes!

---

## 🙏 Acknowledgments

- Built with ❤️ as part of my 100 Days of Web Development challenge
- Thanks to the amazing React and Tailwind CSS communities!

---

**🚀 Ready to continue the journey! Day 55, here I come!**

---

