const categoryEmojis = {
  Food: "🍔",
  Transport: "🚗",
  Shopping: "🛍️",
  Bills: "💳",
  Entertainment: "🎬",
  Health: "🏥",
  Other: "💰",
};

function ExpenseItem({ expense, onDelete }) {
  const isLargeExpense = expense.amount > 1000;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div
      className={`border rounded-lg shadow-md p-4 flex items-center justify-between transition-all duration-300 hover:border-gray-700 ${
        isLargeExpense 
          ? "border-l-4 border-red-500 hover:border-red-400" 
          : "border-l-4 border-gray-800 hover:border-gray-700"
      }`}
      style={{ backgroundColor: '#19191C' }}
    >
      <div className="flex items-center space-x-4 flex-1">
        <div className="text-4xl filter drop-shadow-lg">
          {categoryEmojis[expense.category] || categoryEmojis.Other}
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-white text-lg">{expense.title}</h3>
          <div className="flex items-center gap-3 mt-1">
            <span className="text-sm text-gray-400">{formatDate(expense.date)}</span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-800 text-gray-300 border border-gray-700">
              {expense.category}
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <span
          className={`text-2xl font-bold ${
            isLargeExpense 
              ? "text-red-400" 
              : "text-white"
          }`}
        >
          ₹{expense.amount.toLocaleString('en-IN')}
        </span>
        <button
          onClick={() => onDelete(expense.id)}
          className="text-red-500 hover:text-red-400 hover:bg-red-500/10 p-2 rounded-lg transition-all duration-200"
          aria-label="Delete expense"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ExpenseItem;

