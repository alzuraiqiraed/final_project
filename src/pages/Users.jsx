import React from "react";
import Card from "../components/Card";
import { users } from "../users";

function Users() {
  return (
    <div className="flex flex-wrap gap-4 py-8">
      {users.map((user) => (
        <Card key={user.id} user={user} />
      ))}
    </div>
  );
}

export default Users;
