import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="border-b border-gray-800 shadow-xl sticky top-0 z-50" style={{ backgroundColor: '#19191C' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <span className="text-3xl drop-shadow-lg">💸</span>
            <h1 className="text-xl font-bold text-white">
              Expense Tracker
            </h1>
          </div>
          <div className="flex space-x-3">
            <Link
              to="/"
              className={`px-5 py-2 rounded-lg font-medium transition-all duration-200 ${
                isActive("/")
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
            >
              Home
            </Link>
            <Link
              to="/stats"
              className={`px-5 py-2 rounded-lg font-medium transition-all duration-200 ${
                isActive("/stats")
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 scale-105"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
            >
              Stats
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

