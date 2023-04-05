const { poolPromise } = require("../../database");

const getCustomersModel = async()=>{
    try {
        let q = `EXECUTE SP_get_customer`;
        return await executeQuery(q);
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

const executeQuery = async(query) =>{
    try {
        let pool = await poolPromise;
        return await pool.query(query)
    } catch (error) {
        console.log(error)
        throw new Error(error)
    }
}

module.exports = {
    executeQuery,
    getCustomersModel
}