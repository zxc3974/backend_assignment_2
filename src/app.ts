import express from "express";
import router from "./api/v1/routes/route.js"

const app = express();
app.use(express.json());

app.use(router)



export default app;