function Stats({ expenses }) {
  const totalExpenses = expenses.reduce((sum, item) => sum + item.amount, 0);
  
  // Calculate expenses by category
  const expensesByCategory = expenses.reduce((acc, exp) => {
    acc[exp.category] = (acc[exp.category] || 0) + exp.amount;
    return acc;
  }, {});

  // Calculate count by category
  const countByCategory = expenses.reduce((acc, exp) => {
    acc[exp.category] = (acc[exp.category] || 0) + 1;
    return acc;
  }, {});

  // Get top category
  const topCategory = Object.keys(expensesByCategory).reduce((a, b) =>
    expensesByCategory[a] > expensesByCategory[b] ? a : b,
    "None"
  );

  const categoryEmojis = {
    Food: "🍔",
    Transport: "🚗",
    Shopping: "🛍️",
    Bills: "💳",
    Entertainment: "🎬",
    Health: "🏥",
    Other: "💰",
  };

  // Calculate average expense
  const averageExpense = expenses.length > 0 ? totalExpenses / expenses.length : 0;

  // Find highest and lowest expense
  const highestExpense = expenses.length > 0
    ? expenses.reduce((max, exp) => (exp.amount > max.amount ? exp : max), expenses[0])
    : null;

  const lowestExpense = expenses.length > 0
    ? expenses.reduce((min, exp) => (exp.amount < min.amount ? exp : min), expenses[0])
    : null;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
          <span>📊</span> Statistics
        </h1>
        <p className="text-gray-400">Overview of your spending habits</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="border border-gray-800 rounded-xl shadow-xl p-6 hover:border-orange-500/50 transition-all duration-300" style={{ backgroundColor: '#19191C' }}>
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-400 text-sm font-medium">Total Expenses</span>
            <span className="text-3xl filter drop-shadow-lg">💸</span>
          </div>
          <p className="text-4xl font-bold text-orange-400">₹{totalExpenses.toLocaleString('en-IN')}</p>
        </div>

        <div className="border border-gray-800 rounded-xl shadow-xl p-6 hover:border-blue-500/50 transition-all duration-300" style={{ backgroundColor: '#19191C' }}>
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-400 text-sm font-medium">Total Items</span>
            <span className="text-3xl filter drop-shadow-lg">📋</span>
          </div>
          <p className="text-4xl font-bold text-blue-400">{expenses.length}</p>
        </div>

        <div className="border border-gray-800 rounded-xl shadow-xl p-6 hover:border-purple-500/50 transition-all duration-300" style={{ backgroundColor: '#19191C' }}>
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-400 text-sm font-medium">Average Expense</span>
            <span className="text-3xl filter drop-shadow-lg">📈</span>
          </div>
          <p className="text-4xl font-bold text-purple-400">₹{averageExpense.toLocaleString('en-IN')}</p>
        </div>

        <div className="border border-gray-800 rounded-xl shadow-xl p-6 hover:border-green-500/50 transition-all duration-300" style={{ backgroundColor: '#19191C' }}>
          <div className="flex items-center justify-between mb-3">
            <span className="text-gray-400 text-sm font-medium">Top Category</span>
            <span className="text-3xl filter drop-shadow-lg">
              {topCategory !== "None" ? categoryEmojis[topCategory] : "📊"}
            </span>
          </div>
          <p className="text-2xl font-bold text-green-400">{topCategory}</p>
        </div>
      </div>

      {/* Highest & Lowest */}
      {(highestExpense || lowestExpense) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {highestExpense && (
            <div className="border border-red-500/50 rounded-xl shadow-xl p-6 text-white hover:border-red-500 transition-all duration-300" style={{ backgroundColor: '#19191C' }}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-red-400 text-sm font-medium">Highest Expense</span>
                <span className="text-3xl filter drop-shadow-lg">🔴</span>
              </div>
              <p className="text-2xl font-bold text-white">{highestExpense.title}</p>
              <p className="text-4xl font-bold mt-2 text-red-400">₹{highestExpense.amount.toLocaleString('en-IN')}</p>
              <p className="text-gray-400 text-sm mt-1">{highestExpense.category}</p>
            </div>
          )}

          {lowestExpense && (
            <div className="border border-green-500/50 rounded-xl shadow-xl p-6 text-white hover:border-green-500 transition-all duration-300" style={{ backgroundColor: '#19191C' }}>
              <div className="flex items-center justify-between mb-3">
                <span className="text-green-400 text-sm font-medium">Lowest Expense</span>
                <span className="text-3xl filter drop-shadow-lg">🟢</span>
              </div>
              <p className="text-2xl font-bold text-white">{lowestExpense.title}</p>
              <p className="text-4xl font-bold mt-2 text-green-400">₹{lowestExpense.amount.toLocaleString('en-IN')}</p>
              <p className="text-gray-400 text-sm mt-1">{lowestExpense.category}</p>
            </div>
          )}
        </div>
      )}

      {/* Category Breakdown */}
      {Object.keys(expensesByCategory).length > 0 && (
        <div className="border border-gray-800 rounded-xl shadow-xl p-6" style={{ backgroundColor: '#19191C' }}>
          <h2 className="text-2xl font-bold text-white mb-6">📂 Category Breakdown</h2>
          <div className="space-y-5">
            {Object.entries(expensesByCategory)
              .sort((a, b) => b[1] - a[1])
              .map(([category, amount]) => {
                const percentage = (amount / totalExpenses) * 100;
                return (
                  <div key={category}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl filter drop-shadow-lg">{categoryEmojis[category] || "💰"}</span>
                        <span className="font-semibold text-white">{category}</span>
                        <span className="text-sm text-gray-400">
                          ({countByCategory[category]} items)
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-white">₹{amount.toLocaleString('en-IN')}</span>
                        <span className="text-sm text-gray-400 ml-2">{percentage.toFixed(1)}%</span>
                      </div>
                    </div>
                    <div className="w-full bg-black rounded-full h-3 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      )}

      {expenses.length === 0 && (
        <div className="border border-gray-800 rounded-xl shadow-xl p-12 text-center" style={{ backgroundColor: '#19191C' }}>
          <div className="text-7xl mb-4 filter drop-shadow-lg">📊</div>
          <p className="text-xl text-white font-medium">No expenses to analyze yet!</p>
          <p className="text-gray-400 mt-2">Add some expenses to see your statistics.</p>
        </div>
      )}
    </div>
  );
}

export default Stats;

