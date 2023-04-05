const sql = require("mssql");

const config = {
    user: '',
    password: '',
    server: '',
    database: '',
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