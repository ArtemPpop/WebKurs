const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./database.js');

require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// 🔹 ВСТАВЛЯЕШЬ ТУТ
const subscribersRoute = require("./routes/subscribers");
app.use("/api/subscribers", subscribersRoute);

// 🔹 Сервер запускается
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
