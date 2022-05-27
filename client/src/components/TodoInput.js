import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export default function TodoInput({ newInput, onChange }) {
  return (
    <div className="flex">
      <input
        type="text"
        className="px-2 py-1 grow rounded-l-md border-l-2 border-t-2 border-b-2 border-lime-700"
        placeholder="What do you need to do?"
        value={newInput}
        onChange={onChange}
      />
      <button
        type="submit"
        className="px-3 py-1 bg-lime-700 rounded-r-md text-white hover:bg-lime-800"
      >
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
}
