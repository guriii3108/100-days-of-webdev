import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import NotFound from "./pages/NotFound";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [budget, setBudget] = useState(null);

  // Load expenses and budget from localStorage on mount
  useEffect(() => {
    const storedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    const storedBudget = JSON.parse(localStorage.getItem("budget"));
    setExpenses(storedExpenses);
    setBudget(storedBudget);
  }, []);

  // Save expenses to localStorage whenever expenses change
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // Save budget to localStorage whenever budget changes
  useEffect(() => {
    if (budget !== null) {
      localStorage.setItem("budget", JSON.stringify(budget));
    }
  }, [budget]);

  // Add new expense
  const handleAddExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  // Delete expense
  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter((exp) => exp.id !== id));
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-black relative">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                expenses={expenses}
                budget={budget}
                onAddExpense={handleAddExpense}
                onDeleteExpense={handleDeleteExpense}
                onSetBudget={setBudget}
              />
            }
          />
          <Route path="/stats" element={<Stats expenses={expenses} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

