const { getCustomersModel } = require("../models/customer.model")

const getCustomersService = async() =>{
    try {
        let result = await getCustomersModel()
        return{status:200,message:"success",data:result.recordset}
    } catch (error) {
        return{status:400,message:error.message,data:[]}
    }
}

module.exports = {
    getCustomersService
}