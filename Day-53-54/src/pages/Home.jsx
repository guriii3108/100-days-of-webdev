import { useState } from "react";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import BudgetSetup from "../components/BudgetSetup";

function Home({ expenses, budget, onAddExpense, onDeleteExpense, onSetBudget }) {
  const totalExpenses = expenses.reduce((sum, item) => sum + item.amount, 0);
  const remaining = budget ? budget - totalExpenses : 0;

  // Show budget setup if budget is not set
  if (budget === null) {
    return <BudgetSetup onSetBudget={onSetBudget} />;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
      {/* Budget Summary Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="border border-gray-800 rounded-xl shadow-xl p-6 text-white hover:border-blue-500/50 transition-all duration-300" style={{ backgroundColor: '#19191C' }}>
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-400 text-sm font-medium">Total Budget</span>
            <span className="text-3xl filter drop-shadow-lg">💰</span>
          </div>
          <p className="text-4xl font-bold">₹{budget.toLocaleString('en-IN')}</p>
          <button
            onClick={() => onSetBudget(null)}
            className="mt-3 text-xs text-blue-400 hover:text-blue-300 font-medium transition-colors"
          >
            Change Budget →
          </button>
        </div>

        <div className="border border-gray-800 rounded-xl shadow-xl p-6 text-white hover:border-orange-500/50 transition-all duration-300" style={{ backgroundColor: '#19191C' }}>
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-400 text-sm font-medium">Total Spent</span>
            <span className="text-3xl filter drop-shadow-lg">💸</span>
          </div>
          <p className="text-4xl font-bold text-orange-400">₹{totalExpenses.toLocaleString('en-IN')}</p>
        </div>

        <div
          className={`border rounded-xl shadow-xl p-6 text-white transition-all duration-300 ${
            remaining >= 0
              ? "border-green-500/50 hover:border-green-500"
              : "border-red-500/50 hover:border-red-500"
          }`}
          style={{ backgroundColor: '#19191C' }}
        >
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-400 text-sm font-medium">Remaining</span>
            <span className="text-3xl filter drop-shadow-lg">{remaining >= 0 ? "✅" : "⚠️"}</span>
          </div>
          <p className={`text-4xl font-bold ${remaining >= 0 ? "text-green-400" : "text-red-400"}`}>
            ₹{Math.abs(remaining).toLocaleString('en-IN')}
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      {budget > 0 && (
        <div className="border border-gray-800 rounded-xl shadow-xl p-6 mb-8" style={{ backgroundColor: '#19191C' }}>
          <div className="flex justify-between items-center mb-3">
            <span className="text-sm font-medium text-gray-300">Budget Usage</span>
            <span className={`text-sm font-semibold ${
              (totalExpenses / budget) * 100 > 80 ? "text-red-400" : 
              (totalExpenses / budget) * 100 > 50 ? "text-yellow-400" : 
              "text-green-400"
            }`}>
              {((totalExpenses / budget) * 100).toFixed(1)}%
            </span>
          </div>
          <div className="w-full bg-black rounded-full h-3 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-500 ${
                (totalExpenses / budget) * 100 > 80
                  ? "bg-gradient-to-r from-red-500 to-red-600"
                  : (totalExpenses / budget) * 100 > 50
                  ? "bg-gradient-to-r from-yellow-500 to-amber-500"
                  : "bg-gradient-to-r from-green-500 to-emerald-500"
              }`}
              style={{
                width: `${Math.min((totalExpenses / budget) * 100, 100)}%`,
              }}
            />
          </div>
        </div>
      )}

      {/* Expense Form */}
      <ExpenseForm onAdd={onAddExpense} />

      {/* Expense List */}
      <ExpenseList expenses={expenses} onDelete={onDeleteExpense} />
    </div>
  );
}

export default Home;
