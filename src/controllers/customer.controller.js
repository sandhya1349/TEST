const { getCustomersService } = require("../services/customer.service")

const getCustomersController = async(req,res) =>{
        let result = await getCustomersService()
        res.status(result.status).json({
            "status":result.status,"message":result.message,"data":result.data})
}

module.exports = {
    getCustomersController
}