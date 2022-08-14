import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { getAllUsers, createUser } from "./index.js";

const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/users", getAllUsers);
app.post("/create-user", createUser);

app.listen(port);
