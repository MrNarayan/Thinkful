import React, { useEffect, useState } from "react";
import UserTodos from './UserTodos.js'

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then(setUsers)
      .catch((error) => {
        console.log(error);
      });

      if(currentUser.userId)
      {
      fetch(`https://jsonplaceholder.typicode.com/users/${currentUser.userId}/todos`)
      .then((response) => response.json())
      .then(setTodos)
      .catch((error) => {
        console.log(error);
      });
    }
    
  }, [currentUser]);

  return (
    <div className="App">
      {/* Write your code below */}
      <div className="users">
      <ul className="user-list">
          {users.map(user => (
                  <li key={user.name}>
                      <button key={user.name} type="button" onClick={() => setCurrentUser(user)}>{user.name}</button>
                  </li>
              ))
          }
      </ul>
      </div>
      {currentUser.userId?
      <div className="todos">
      <ul className="todo-list">
          {todos.map(todo => (
                  <li key={todo.title}>
                      <p key={todo.title} >{todo.title}</p>
                  </li>
              ))
          }
      </ul>
      </div>
      : <p>No user selected</p> 
      }
    </div>
  );
}

export default App;
