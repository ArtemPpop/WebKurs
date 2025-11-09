const cors = require("cors")
const express = require('express')
const pool = require("./indexdb.js")
const PORT = process.env.PORT || 5000
const app = express()
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const { where } = require("sequelize")
const corsOption = {
    origin:"http://localhost:5173"
}
app.use(bodyParser.json());
app.use(cors(corsOption))
app.listen(PORT, () =>{
    console.log(`server starting ${PORT}`)
})

app.get("/coffe_1", async(req,res) =>{
    try{
        const addTodor = await pool.query("SELECT * FROM coffedb.coffe_1")
        res.json(addTodor.rows)
    }
    catch(err){
        console.error(err.message)
    }
})

app.get("/coffe_2", async(req,res) =>{
    try{
        const addTodor = await pool.query("SELECT * FROM coffedb.coffe_2")
        res.json(addTodor.rows)
    }
    catch(err){
        console.error(err.message)
    }
})


app.get("/coffe_3", async(req,res) =>{
    try{
        const addTodor = await pool.query("SELECT * FROM coffedb.coffe_3")
        res.json(addTodor.rows)
    }
    catch(err){
        console.error(err.message)
    }
})

app.put('/postgres/user/:user_id', async (req, res) => {


const { name_user, age_user, mail_user, nick_user,number,password } = req.body
try {
const result = await pool.query(
'UPDATE user SET name_user = $1, age_user = $2, mail_user = $3, nick_user = $4 , number = $5 , password = $6 WHERE user_id = $7 RETURNING *',
[ name_user, age_user, mail_user, nick_user,number,password, req.params.id]
)
if (result.rows.length === 0) {
return res.status(404).json({ error: 'Product not found' })
}

const user = result.rows[0]
const userResult = await pool.query('SELECT name FROM users WHERE user_id = $1', [users.id])
res. json({
...user,
user: { id: users.id, name: userResult.rows[0].name }
})
} catch (error) {
res.status(500).json({ error: 'Server error' })
}
})


// app.delete('/postgres/coffe_1', async (req, res) => {
// try {
//     await pool.query('DELETE FROM users WHERE idcoffe1 = $1', [req.params.id])
//     res.json({ success: true })
// } catch (error){
// res. status(500).json({ error: 'Server error' })
// }
// })




app.delete('/coffe_1/:idcoffe1', async (req, res) => {
  try {
    const { idcoffe1 } = req.params;
    const result = await pool.query(
      'DELETE FROM coffedb.coffe_1 WHERE idcoffe1 = $1',
      [idcoffe1]
    );
    if (result.rowCount > 0) {
      res.status(204).send(); // Успешное удаление
    } else {
      res.status(404).json({ message: 'Запись не найдена' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

const handleDelete = async (id) => {
await deleteCoffe(id)
setCoffe(coffe_1.filter(p => p.id !== id))
}

app.get('/postgres/user', async (req, res) => {
try {
const result = await pool.query(`
SELECT p.*, m.name as name_user FROM user p JOIN users m ON p.name_id = m.id`)
const products = result.rows.map(p => ({
...p,
manufacturer: { id: p.id, name: p.name_user }
}))
res. json(users)
}catch (error) {
res.status(500).json({ error: 'Server error' })
}
})

