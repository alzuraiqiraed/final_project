import React from "react";
import { Link, useParams } from "react-router-dom";
import { users } from "../users";

function UserDetail() {
  const { id } = useParams();

  const user = users.find((u) => u.id === Number(id));

  return (
    <div className="flex flex-col px-6 py-8">
      <div className="w-full mb-6">
        <Link
          to="/Build-a-Multi-Page-React-Application-with-Routing/users"
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
        >
          go back
        </Link>
      </div>
      <img
        src="https://cdn-icons-png.flaticon.com/512/11789/11789135.png"
        alt={user.name}
        className="w-32 h-32 rounded-full border shadow-md mb-4"
      />
      <div className="">
        <h1 className="text-2xl font-bold text-gray-800 mb-2">{user.name}</h1>
        <p className="text-gray-600 text-lg">
          <span className="font-medium text-gray-700">Email:</span> {user.email}
        </p>
      </div>
    </div>
  );
}

export default UserDetail;
