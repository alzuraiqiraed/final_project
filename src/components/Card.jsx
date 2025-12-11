import React from "react";
import { Link } from "react-router-dom";

function Card({ user }) {
  return (
    <div className="bg-gray-50 flex items-center justify-between shadow-sm rounded-lg py-4 px-5 hover:shadow-md transition">
      <img
        src="https://cdn-icons-png.flaticon.com/512/11789/11789135.png"
        alt=""
        className="w-12 h-12 rounded-full shadow-sm"
      />
      <div className="flex flex-col items-end ml-4">
        <h2 className="font-semibold text-gray-800">{user.name}</h2>
        <Link
          to={`/Build-a-Multi-Page-React-Application-with-Routing/users/${user.id}`}
          className="text-blue-600 hover:text-blue-800 text-sm font-medium underline"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

export default Card;
