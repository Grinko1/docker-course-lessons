const express = require('express');
const { connectDb } = require('./helper/db');
const { port, host, db } = require('./config');
const app = express()



const startServer = () => {
    app.listen(port, async () => {
        console.log(`Started auth service on port ${port}`);
        console.log(`Host from env is ${host}`);
        console.log(`Db url is ${db}`);
    })
}



app.get('/auth', (req, res) => {
    res.send('Our auth server is working correctly with auto updates')
})

connectDb()
    .on('error', console.log)
    .on('disconnected', connectDb)
    .on('open', startServer)