require("dotenv").config();

module.exports ={
    service: {
        port: process.env.SERVICE_PORT,
        prefix_url: process.env.PREFIX_URL
    }
}