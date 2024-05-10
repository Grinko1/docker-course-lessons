const express = require('express');
const { connectDb } = require('./helper/db');
const { port, host, db } = require('./config');
const app = express()



const startServer = () => {
    app.listen(port, () => {
        console.log(`Started api service on port ${port}`);
        console.log(`Host from env is ${host}`);
        console.log(`Db url is ${db}`);
    })
}



app.get('/test', (req, res) => {
    res.send('Our api server is working correctly')
})

connectDb()
    .on('error', console.log)
    .on('disconnected', connectDb)
    .on('open', startServer)