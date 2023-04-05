const sql = require("mssql");
require('dotenv').config();

const config = {
    user: process.env.U,
    password: process.env.PASSWORD,
    server: process.env.SERVER,
    database: process.env.DATABASE,
    options: {
        trustedConnection: true,
        encrypt: true,
        enableArithAbort: true,
        trustServerCertificate: true,
    }
}

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(async (pool) => {
    console.log('Connected to MSSQL')
    return pool
  })
  .catch((err) => console.log('Database Connection Failed! Bad Config: ', err))

module.exports = {
    poolPromise
}