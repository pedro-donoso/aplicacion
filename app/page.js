/* eslint-disable @next/next/no-img-element */
async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
}

async function HomePage() {
  const users = await fetchUsers();

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id} className="bg-slate-500 mb-2 p-4 rounded-md flex justify-between">
          <div>
            <h4 className="font-bold">
              {user.id} {user.first_name} {user.last_name}
            </h4>
            <p className="text-slate-100">email: {user.email}</p>
          </div>
          <img src={user.avatar} className="rounded-full w-20" />
        </li>
      ))}
    </ul>
  );
}

export default HomePage;
