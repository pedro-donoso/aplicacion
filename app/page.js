async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users")
  const data = await res.json()
  console.log(data);
}

async function HomePage() {

  await fetchUsers()

  return (
    <div>HomePage</div>
  )
}

export default HomePage;