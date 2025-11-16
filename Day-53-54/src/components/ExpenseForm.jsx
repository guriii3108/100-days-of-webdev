import { useState } from "react";

function ExpenseForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  const categories = [
    { value: "Food", emoji: "🍔" },
    { value: "Transport", emoji: "🚗" },
    { value: "Shopping", emoji: "🛍️" },
    { value: "Bills", emoji: "💳" },
    { value: "Entertainment", emoji: "🎬" },
    { value: "Health", emoji: "🏥" },
    { value: "Other", emoji: "💰" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !amount || !category || !date) {
      alert("Please fill in all fields!");
      return;
    }

    const newExpense = {
      id: Date.now(),
      title: title.trim(),
      amount: Number(amount),
      category,
      date,
    };

    onAdd(newExpense);
    setTitle("");
    setAmount("");
    setCategory("");
    setDate(new Date().toISOString().split("T")[0]);
  };

  return (
    <div className="border border-gray-800 rounded-xl shadow-xl p-6 mb-6" style={{ backgroundColor: '#19191C' }}>
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <span>➕</span> Add New Expense
      </h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-300 mb-2">
            Expense Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Groceries, Movie tickets..."
            className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-gray-300 mb-2">
              Amount (₹)
            </label>
            <input
              id="amount"
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              min="0"
              step="0.01"
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
            />
          </div>

          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-2">
              Date
            </label>
            <input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
            />
          </div>
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-300 mb-2">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-200"
          >
            <option value="" className="bg-black">Select a category</option>
            {categories.map((cat) => (
              <option key={cat.value} value={cat.value} className="bg-black">
                {cat.emoji} {cat.value}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold active:scale-95 transition-all duration-200 shadow-lg shadow-blue-600/30"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
}

export default ExpenseForm;

