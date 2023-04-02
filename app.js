import express from 'express';
import HelloController
  from "./controllers/hello-controller.js"
import UserController
  from "./controllers/users/users-controller.js"
import TuitsController
  from "./controllers/tuits/tuits-controller.js";
import cors from 'cors' // Cross Origin Resource Sharing

const app = express()
app.use(cors())
app.use(express.json()); // parse JSON from HTTP request body
TuitsController(app);
HelloController(app)
UserController(app)
// app.listen(4000) http://localhost:4000/hello
app.listen(process.env.PORT || 4000);