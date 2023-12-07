import "./App.css";
import  Items from "./Items";
import React, { useState, useEffect } from 'react'

export default function App() {
  const [users, setUsers] = useState([]);
  const [currentId, setCurrentId] =useState(1);
  useEffect(() => {
    const getUsers = () => {
      const url = "https://reqres.in/api/users?page=1";
      fetch(url)
          .then((res) => res.json())
          .then(({ data }) => setUsers(data))
          .catch((e) => console.log(e));
    };
    getUsers();
  }, []);


  return (
      <div className="App">
        <h1>Albums</h1>
        {
          users.map(({id, email, first_name, last_name,avatar}) =>(
                  <div key={id}>
                    <img src={avatar} alt="avatar" onClick={() => setCurrentId(id)}/>
                    <p>{email}</p>
                    <p>{first_name}</p>
                    <p>{last_name}</p>
                    {currentId === id && <Items id={id} />}
                  </div>
              )
          )
        }
      </div>
  );
}

