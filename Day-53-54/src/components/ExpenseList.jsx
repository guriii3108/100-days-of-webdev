import { useState } from "react";
import ExpenseItem from "./ExpenseItem";

function ExpenseList({ expenses, onDelete }) {
  const [filterCategory, setFilterCategory] = useState("");

  const categories = ["Food", "Transport", "Shopping", "Bills", "Entertainment", "Health", "Other"];

  const filteredExpenses = filterCategory
    ? expenses.filter((exp) => exp.category === filterCategory)
    : expenses;

  if (expenses.length === 0) {
    return (
      <div className="border border-gray-800 rounded-xl shadow-xl p-12 text-center" style={{ backgroundColor: '#19191C' }}>
        <div className="text-7xl mb-4 filter drop-shadow-lg">✨</div>
        <p className="text-xl text-white font-medium">No expenses yet!</p>
        <p className="text-gray-400 mt-2">Start tracking your expenses by adding one above.</p>
      </div>
    );
  }

  return (
    <div className="border border-gray-800 rounded-xl shadow-xl p-6" style={{ backgroundColor: '#19191C' }}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <h2 className="text-2xl font-bold text-white mb-4 sm:mb-0">
          📋 Your Expenses ({filteredExpenses.length})
        </h2>
        {expenses.length > 0 && (
          <div className="flex items-center gap-2">
            <label htmlFor="filter" className="text-sm font-medium text-gray-300">
              Filter:
            </label>
            <select
              id="filter"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-3 py-2 bg-black border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm transition-all duration-200"
            >
              <option value="" className="bg-black">All Categories</option>
              {categories.map((cat) => (
                <option key={cat} value={cat} className="bg-black">
                  {cat}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {filteredExpenses.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-400">No expenses found in this category.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filteredExpenses.map((exp) => (
            <ExpenseItem key={exp.id} expense={exp} onDelete={onDelete} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ExpenseList;

