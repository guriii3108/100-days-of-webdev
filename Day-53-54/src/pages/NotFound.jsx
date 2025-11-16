import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center relative z-10">
      <div className="border border-gray-800 rounded-xl shadow-xl p-12" style={{ backgroundColor: '#19191C' }}>
        <div className="text-9xl mb-6 filter drop-shadow-lg">😕</div>
        <h1 className="text-5xl font-bold text-white mb-4">404 - Page Not Found</h1>
        <p className="text-xl text-gray-400 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg shadow-blue-600/30 scale-100 hover:scale-105"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;

