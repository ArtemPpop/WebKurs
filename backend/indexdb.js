const { query, text } = require("express")
const Pool = require("pg").Pool

const pool = new Pool({
    user:"postgres",
    password:"228339",
    host:"localhost",
    port:"5432",
    database:"postgres"
})

module.exports = {
    query:(text,params) => pool.query(text,params)
}