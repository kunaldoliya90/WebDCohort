const express = require("express");

const app = express();

// Assignment of Week 5 - Class 2


function middleware(req, res, next) {
    const timestamp = new Date().toISOString();
    console.log(req.method);
    console.log(req.url);
    console.log(timestamp);
    next();
  }

app.get("/", function (req, res) {
  res.send("On Main Directory")
});
app.get("/request", middleware);



// Assignment of Week 5 - Class 1


// app.get("/sum", function(req, res) {
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);

//     res.json({
//         ans: a + b
//     })
// });

// app.get("/multiply", function(req, res) {
//     const a = req.query.a;
//     const b = req.query.b;
//     res.json({
//         ans: a * b
//     })
// });

// app.get("/divide", function(req, res) {
//     const a = req.query.a;
//     const b = req.query.b;
//     res.json({
//         ans: a / b
//     })

// });

// app.get("/subtract", function(req, res) {
//     const a = parseInt(req.query.a);
//     const b = parseInt(req.query.b);
//     res.json({
//         ans: a - b
//     })
// });

app.listen(3000);
