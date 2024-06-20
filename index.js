const express = require("express");
const cors = require("cors")
const app = express();
const port = 5000;
const pool = require("./db");
const userRouter  = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({limit:"5mb", extended:true}))

app.use('/user', userRouter)
app.use('/note', noteRouter)

app.get('/', (req, res)=>{
    res.send('Hello index js ')
})

// Mounting Routes
// app.use('/api', routes)

// app.post("/api/register", (req, res) => {
//   console.log("Welcome to register page");
//   res.json({ message: "Welcome to register page" });
// });
// app.post("/api/login", (req, res) => {
//   console.log("Welcome to login page");
//   res.json({ message: "Welcome to login page" });
// });
// app.get("/api/user", async (req, res) => {
//   const response = await pool.query('select * from users')
//   res.json({message:"Welcome to user page", data:response.rows})
//   res.status(200).send("Success");
// });

app.listen(port, () => {
  console.log("Server Running on PORT " + port);
});
