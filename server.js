import express from "express";
import validateRoutes from "./routes/validateRoutes.js";

const app = express();
app.use(express.json());
app.use("/validate", validateRoutes);

app.listen(3004, () => console.log("Case4 server listening on 3004"));
