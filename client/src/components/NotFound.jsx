// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-stone-950 text-white p-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! Page not found.</p>
      <Link
        to="/"
        className="px-10 py-2 bg-amber-300 text-stone-950 font-semibold rounded hover:bg-amber-400 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;