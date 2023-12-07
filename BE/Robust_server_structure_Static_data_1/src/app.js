const express = require("express");
const app = express();

const users = require("./data/users-data");
const states = require("./data/states-data");

function getUsers(userId) {
    if (userId === "" || userId === undefined) {
      return users;
    }
    return users.find(user => (user.id === Number(userId)));
  }

  function getStates(stateId) {
    if (stateId === "" || stateId === undefined) {
      return states;
    }
  
    return states[stateId];
  }

// TODO: return an array of users from /users in form of { data: Array }
// TODO: return a single user by id from /users/:userId in form of { data: Object }
app.get("/users/:userId", (req, res) => {
    const userlist = getUsers(req.params.userId);
    if(userlist === undefined || userlist.length === 0)
     res.send(`User ID not found: ${req.params.userId}`) 
    else
     res.json({ data: userlist });
});


// TODO: return all states from /states in the form of { data: Array }
// TODO: Return a single state from /states/:stateCode in the form of { data: { stateCode: String, name: String } }
app.get("/states/:stateCode", (req, res) => {
    const statelist = getStates(req.params.stateCode);
    if(statelist === undefined || statelist.length === 0)
     res.send(`State code not found: ${req.params.stateCode}`)
    else
     res.json({ data: { stateCode: req.params.stateCode, name: statelist } });
});

app.get("/states", (req, res, next) => {
    res.json({ data: states });
});

app.get("/users", (req, res, next) => {
    res.json({ data: users });
});

// Not found handler
app.use((request, response, next) => {
    next(`Not found: ${request.originalUrl}`);
  });
  
  // Error handler
  app.use((error, request, response, next) => {
    response.send(error);
  });
  
module.exports = app;
