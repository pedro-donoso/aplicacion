async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users")
  const data = await res.json()
  return data.data
}

async function HomePage() {

  const users = await fetchUsers()

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <div>
            <h4>{user.id} {user.first_name} {user.last_name}</h4>
           <p>email: {user.email}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default HomePage;