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

// Добавить новый нож
app.post("/knives", async (req, res) => {
    try {
        const { name, description, price, rating, image_url } = req.body
        const result = await pool.query(
            "INSERT INTO knives (name, description, price, rating, image_url) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [name, description, price, rating, image_url]
        )
        res.status(201).json(result.rows[0])
    } catch (error) {
        console.error("Ошибка при добавлении ножа:", error.message)
        res.status(500).json({ error: "Ошибка сервера", details: error.message })
    }
})

// Обновить нож
app.put("/knives/:id", async (req, res) => {
    try {
        const { id } = req.params
        const { name, description, price, rating, image_url } = req.body
        const result = await pool.query(
            "UPDATE knives SET name = $1, description = $2, price = $3, rating = $4, image_url = $5 WHERE id = $6 RETURNING *",
            [name, description, price, rating, image_url, id]
        )
        
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Нож не найден" })
        }
        
        res.json(result.rows[0])
    } catch (error) {
        console.error("Ошибка при обновлении ножа:", error.message)
        res.status(500).json({ error: "Ошибка сервера", details: error.message })
    }
})

// Удалить нож
app.delete("/knives/:id", async (req, res) => {
    try {
        const { id } = req.params
        const result = await pool.query(
            "DELETE FROM knives WHERE id = $1 RETURNING *",
            [id]
        )
        
        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Нож не найден" })
        }
        
        res.status(204).send()
    } catch (error) {
        console.error("Ошибка при удалении ножа:", error.message)
        res.status(500).json({ error: "Ошибка сервера", details: error.message })
    }
})
app.get("/test-db", async (req, res) => {
    try {
        const result = await pool.query("SELECT NOW() as current_time")
        res.json({ 
            message: "Подключение к БД успешно",
            current_time: result.rows[0].current_time
        })
    } catch (error) {
        console.error("Ошибка подключения к БД:", error.message)
        res.status(500).json({ 
            error: "Ошибка подключения к БД", 
            details: error.message 
        })
    }
})

// Server start
app.listen(PORT, () => {
    console.log(`Server starting on port ${PORT}`)
})