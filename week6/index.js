const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

app.use(express.json());

const JWT_SECRET = "Kunal@9746";

const users = [];

// function generateToken() {
//     let options = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//     let token = "";
//     for (let i = 0; i < 32; i++) {
//         // use a simple function here
//         token += options[Math.floor(Math.random() * options.length)];
//     }
//     return token;
// }

app.post("/signup", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username: username,
    password: password,
  });

  console.log(users);

  res.json({
    message: "You have signed in!",
  });
});

app.post("/signin", function (req, res) {
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
    const token = jwt.sign(
      {
        username: username,
      },
      JWT_SECRET
    );
    // user.token = token;
    res.json({
      message: token,
    });
  } else {
    res.json({
      message: "User not authenticated!",
    });
  }
  console.log(users);
});

// app.get('/me', function(req, res){
//     const token = req.headers.token
//     const decodedInformation = jwt.verify(token, JWT_SECRET);

//     const username = decodedInformation.username

//     let foundUser = null;
//     for(let i = 0; i<users.length; i++){
//         if(users[i].username == username){
//             foundUser = users[i]
//         }
//     }
//     if(foundUser){
//         res.json({
//             username: req.body.username,
//             password: req.body.password
//         })
//     } else {
//         res.json({
//             message: 'Token Invalid'
//         })
//     }
// })

function auth(req, res, next) {
  const token = req.headers.token;

  if (token) {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).send({
          message: "Unauthorized",
        });
      } else {
        req.user = decoded;
        next();
      }
    });
  } else {
    res.status(401).send({
      message: "Unauthorized",
    });
  }
}

// function auth(req, res) {
//   const token = req.headers.token;

//   if (token) {
//     jwt.verify(token, JWT_SECRET, (err, decoded) => {
//       if (err) {
//         res.status(401).send({
//           message: "Unauthorized",
//         });
//       } else {
//         req.user = decoded;
//         next();
//       }
//     });
//   } else {
//     res.status(401).send({
//       message: "Unauthorized",
//     });
//   }
// }

app.get("/me", auth, (req, res) => {
  const user = req.user;

  res.send({
    username: user.username,
  });
});

app.listen(3000);
