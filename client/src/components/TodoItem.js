import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function TodoItem({ description, status }) {
  let statusBtn = (
    <button
      className={`text-xs px-1 border-2 rounded-md font-medium ${
        status
          ? "bg-lime-200 border-lime-700 text-lime-900"
          : "bg-red-200 border-red-700 text-red-900"
      }`}
    >
      {status ? "completed" : "incompleted"}
    </button>
  );

  return (
    <div className="flex justify-between">
      <div className="flex items-center">
        <p className="mr-4">{description}</p>
        {statusBtn}
      </div>
      <div className="text-lg">
        <button className="text-lime-700">
          <FontAwesomeIcon icon={faPen} />
        </button>
        <button className="ml-3 text-red-700">
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
    </div>
  );
}
