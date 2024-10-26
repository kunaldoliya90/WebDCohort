const express = require("express");
const app = express();
const path = require('path');

app.use(express.json());



// array for storing the todo tasks
let bucket = [];

function addingTodo() {
  // Create main div for the todo item
  let mainDiv = document.createElement("div");
  mainDiv.className = "todo-item"; // Add a class for styling

  // Create the text element
  let elementText = document.getElementById("todoInput").value;
  let newEle = document.createElement("h2");
  newEle.innerHTML = elementText;

  // Create the Delete button
  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.onclick = function () {
    mainDiv.remove(); // Remove the todo item
  };

  // Create the Edit button
  let editButton = document.createElement("button");
  editButton.innerHTML = "Edit";
  editButton.onclick = function () {
    let newText = prompt("Edit your todo:", newEle.innerHTML);
    if (newText !== null) {
      // Only update if the user didn't cancel
      newEle.innerHTML = newText;
    }
  };

  // Attach everything to the main div
  mainDiv.appendChild(newEle);
  mainDiv.appendChild(editButton);
  mainDiv.appendChild(deleteButton);
  document.getElementById("mainDiv").appendChild(mainDiv);

  // Clear the input field after adding the todo
  document.getElementById("todoInput").value = "";
}

let users = [];

// Functions
// SignupFunction
function signupHandlerBackend(req, res) {
  const username = req.body.username;
  const password = req.body.password;
  users.push({
    username: username,
    password: password,
  });
  console.log(users);
  res.json({
    message: "You have signed Up!",
  });
}

// LoginFunction
function loginHandlerBackend(req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const user = users.find(function (u) {
    if (u.username == username && u.password == password) {
      return true;
    } else {
      return false;
    }
  });

  if (user) {
    res.send("Login Successfully");
    console.log(user);
  } else {
    res.send("Login credentials Invalid!");
  }
}

// Routes
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'todo.html')); // Adjust this path as needed
});

app.post("/signup", signupHandlerBackend);
app.post("/signin", loginHandlerBackend);

// Testing the route
// app.get("/", (req, res) => {
//   res.json({
//     message: "Todo Application!",
//   });
// });

app.listen(3000, () => {
  console.log("Server running at port 3000");
});
