import express from "express";
import { checkUsername } from "../controllers/validateController.js";

const router = express.Router();
router.get("/username", checkUsername); // /validate/username?u=...
export default router;
