import React from "react";

export default function TodoFilter({ status, onClick }) {
  return (
    <button
      className="mb-2 py-1 px-3 bg-lime-700 text-white text-sm font-semibold rounded-md hover:bg-lime-800"
      onClick={onClick}
    >
      {status ? "Show all" : "Show completed"}
    </button>
  );
}
