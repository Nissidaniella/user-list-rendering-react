import React, { useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  const addUser = () => {
    const newUser = {
      id: Math.random(),
      name: "John Doe",
      email: "johndoe@example.com"
    };
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <button onClick={addUser}>Add User</button>
      {users.map(user => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
