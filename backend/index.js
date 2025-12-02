const cors = require("cors")
const express = require('express')
const pool = require("./indexdb.js")
const PORT = process.env.PORT || 5000
const app = express()

// Middleware
app.use(express.json())
app.use(cors({
    origin: "http://localhost:5173"
}))

// Получить все ножи
app.get("/knives", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM knives ORDER BY id ASC")
        res.json(result.rows)
    } catch (error) {
        console.error("Ошибка при получении ножей:", error.message)
        res.status(500).json({ error: "Ошибка сервера", details: error.message })
    }
})
app.get("/souvenirs", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM souvenirs ORDER BY id ASC")
        res.json(result.rows)
    } catch (error) {
        console.error("Ошибка при получении сувениров:", error.message)
        res.status(500).json({ error: "Ошибка сервера" })
    }
})
app.get("/flashlights", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM flashlights ORDER BY id ASC")
        res.json(result.rows)
    } catch (error) {
        console.error("Ошибка при получении фонарей:", error.message)
        res.status(500).json({ error: "Ошибка сервера" })
    }
})
app.get("/accessories", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM accessories ORDER BY id ASC")
        res.json(result.rows)
    } catch (error) {
        console.error("Ошибка при получении аксессуаров:", error.message)
        res.status(500).json({ error: "Ошибка сервера" })
    }
})

// Получить нож по ID
app.get("/knives/:id", async (req, res) => {
    try {
        const { id } = req.params
        const result = await pool.query("SELECT * FROM knives WHERE id = $1", [id])
        
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Нож не найден" })
        }
        
        res.json(result.rows[0])
    } catch (error) {
        console.error("Ошибка при получении ножа:", error.message)
        res.status(500).json({ error: "Ошибка сервера", details: error.message })
    }
})
// Получить сувенир по ID
app.get("/souvenirs/:id", async (req, res) => {
    try {
        const { id } = req.params
        const result = await pool.query("SELECT * FROM souvenirs WHERE id = $1", [id])

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Сувенир не найден" })
        }

        res.json(result.rows[0])
    } catch (error) {
        console.error("Ошибка:", error.message)
        res.status(500).json({ error: "Ошибка сервера" })
    }
})

app.get("/flashlights/:id", async (req, res) => {
    try {
        const { id } = req.params
        const result = await pool.query("SELECT * FROM flashlights WHERE id = $1", [id])

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Фонарь не найден" })
        }

        res.json(result.rows[0])
    } catch (error) {
        console.error("Ошибка:", error.message)
        res.status(500).json({ error: "Ошибка сервера" })
    }
})
app.get("/accessories/:id", async (req, res) => {
    try {
        const { id } = req.params
        const result = await pool.query("SELECT * FROM accessories WHERE id = $1", [id])

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Товар не найден" })
        }

        res.json(result.rows[0])
    } catch (error) {
        console.error("Ошибка:", error.message)
        res.status(500).json({ error: "Ошибка сервера" })
    }
})








// Server start
app.listen(PORT, () => {
    console.log(`Server starting on port ${PORT}`)
})