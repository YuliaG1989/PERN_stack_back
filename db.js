const Pool = require("pg").Pool;

const pool = new Pool({
    user: "yuliaglushenko", 
    password: 5531302,
    host: "localhost",
    port : 5432,
    database: "todo"
})

module.exports = pool;