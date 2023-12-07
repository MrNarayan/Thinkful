import React, { useEffect, useState } from "react";
import UserTodos from './UserTodos.js'

function App() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then(setUsers);

    if (currentUser.id) {
      fetch(`https://jsonplaceholder.typicode.com/users/${currentUser.id}/todos`)
          .then((response) => response.json())
          .then(setTodos);
    }

  }, [currentUser]);

  return (
      <div className="App">
        {/* Write your code below */}
        <ul className="user-list">
          {users.map(user => (
              <li key={user.name}>
                <button key={user.name} type="button" onClick={() => setCurrentUser(user)}>{user.name}</button>
              </li>
          ))
          }
        </ul>
        {currentUser.id ?
            <ul className="todo-list">
              {todos.map(todo => (
                  <li key={todo.title}>
                    <p key={todo.title}>{todo.title}</p>
                  </li>
              ))
              }
            </ul>
            : <p>No user selected</p>
        }
      </div>
  );
}

export default App;
