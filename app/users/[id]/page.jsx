async function getUser(id) {
    const res = await fetch(`https://reqres.in/api/users/${id}`)
    const data = await res.json()
    return data.data
}

async function UserPage({ params }) {
const user = await getUser(params.id)
  return (
    <div className="bg-slate-400 p-10 rounded-md">
        <img src={user.avatar} alt="avatar" width={150} className="mx-auto my-4"/>
     <h3 className="text-2xl font-bold">{user.first_name} {user.last_name}</h3>
     <div className="text-black">
       <li>Nombre: {user.first_name}</li>
     <li>Apellido: {user.last_name}</li>
     <li>Email: {user.email}</li>
     <li>ID: {user.id}</li>
     </div>
    
    </div>
  );
}

export default UserPage;