import { isValidUsername } from "../services/validateService.js";

export function checkUsername(req, res) {
  const { u } = req.query;
  try {
    const ok = isValidUsername(u);
    res.json({ username: u, valid: ok });
  } catch (err) {
    res.status(500).json({ error: "Validation failed" });
  }
}
