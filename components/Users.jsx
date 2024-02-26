"use client";
import Link from "next/link";

function Users({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <Link key={user.id} href={`/users/${user.id}`}>
          <li
            key={user.id}
            className="bg-slate-500 mb-2 p-4 rounded-md flex justify-between"
            onClick={() => {
              alert(user.id);
            }}
          >
            <div>
              <h4 className="font-bold">
                {user.id} {user.first_name} {user.last_name}
              </h4>
              <p className="text-slate-100">email: {user.email}</p>
            </div>
            <img src={user.avatar} className="rounded-full w-20" />
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default Users;
