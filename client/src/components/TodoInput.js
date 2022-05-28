import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faPen } from "@fortawesome/free-solid-svg-icons";

export default function TodoInput({ newInput, onChange, selected }) {
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
        {selected ? (
          <FontAwesomeIcon icon={faPen} />
        ) : (
          <FontAwesomeIcon icon={faPlus} />
        )}
      </button>
    </div>
  );
}
