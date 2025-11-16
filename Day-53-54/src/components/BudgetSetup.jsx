import { useState } from "react";

function BudgetSetup({ onSetBudget }) {
  const [budget, setBudget] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const budgetValue = Number(budget);
    if (budgetValue > 0) {
      onSetBudget(budgetValue);
    } else {
      alert("Please enter a valid budget amount!");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="border border-gray-800 rounded-xl shadow-2xl p-8 max-w-md w-full" style={{ backgroundColor: '#19191C' }}>
        <div className="text-center mb-6">
          <div className="text-5xl mb-4 filter drop-shadow-lg">💰</div>
          <h2 className="text-3xl font-bold text-white mb-2">Welcome to Expense Tracker!</h2>
          <p className="text-gray-400">Set your monthly budget to get started</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
              Monthly Budget (₹)
            </label>
            <input
              id="budget"
              type="number"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder="e.g., 50000"
              min="0"
              step="100"
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200 text-lg"
              autoFocus
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold active:scale-95 transition-all duration-200 shadow-lg shadow-blue-600/30"
          >
            Set Budget
          </button>
        </form>
      </div>
    </div>
  );
}

export default BudgetSetup;

