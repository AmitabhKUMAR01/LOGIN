import express from "express";
import cors from "cors";
import morgan from "morgan";
import connect from "./database/conn.js";
import router from "./router/route.js";
const app = express();

/** middleware */

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.disable("x-powered-by");

const port = 8080;
/** HTTP GET REQUEST   */

app.get("/", (req, res) => {
  res.status(201).json("Home get request");
});

/* API ROUTES */    
app.use('/api',router)

/* start server only when we have a valid connection */
connect().then(() => {
  try {
    app.listen(port, () => {
      console.log(`server started at ${port}`);
    });
  } catch (error) {
    console.log("cannot connect to server");
  }
}).catch(error => {console.log('invalid database connection..')});
