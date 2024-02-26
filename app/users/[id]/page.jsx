async function getUser(id) {
    const res = await fetch(`https://reqres.in/api/users/${id}`)
    const data = await res.json()
    return data.data
}

async function UserPage({ params }) {
const user = await getUser(params.id)
  return (
    <div>
      {JSON.stringify(user)}
    </div>
  );
}

export default UserPage;