"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-700 p-6">
      <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl rounded-3xl p-10 max-w-lg w-full text-center">
        {/* Icon */}
        <div className="text-6xl mb-4">⚠️</div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-white mb-3">
          Something went wrong
        </h1>

        {/* Message */}
        <p className="text-blue-100 mb-6">
          Oops! An unexpected error occurred. Please try again or refresh the
          page.
        </p>

        {/* Error message (dev only optional) */}
        <p className="text-red-300 text-sm mb-6 break-all">{error?.message}</p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-2 bg-white text-blue-700 font-semibold rounded-xl shadow hover:bg-blue-100 transition"
          >
            Try Again
          </button>

          <button
            onClick={() => (window.location.href = "/")}
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-xl shadow hover:bg-blue-600 transition"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}
