const express = require("express");
const router = express.Router();
const db = require("../backend/database.js");  

router.post("/", async (req, res) => {
  const { email } = req.body;

  if (!email) return res.status(400).json({ message: "Email обязателен" });

  try {
    const result = await db.query(
      "INSERT INTO subscribers (email) VALUES ($1) RETURNING *",
      [email]
    );

    res.json({ message: "Подписка оформлена!", data: result.rows[0] });
  } catch (error) {
    console.error(error);

    if (error.code === "23505") {
      return res.status(400).json({ message: "Этот email уже подписан" });
    }

    res.status(500).json({ message: "Ошибка сервера" });
  }
});

module.exports = router;
