
import React from 'react'

interface User {
  id:number;
  name:string;
}

const UserPage = async () => {

  const res = await fetch(
    'https://jsonplaceholder.typicode.com/users',
    // {cache:'no-store'} // stop caching data
    //{next:{revalidate:10}} // get data every 1o seconds
    );
  const users : User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  )
}

export default UserPage