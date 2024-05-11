const express = require('express');
const { connectDb } = require('./helper/db');
const { port, host, db, apiUrl } = require('./config');
const axios = require('axios')

const app = express()



const startServer = () => {
    app.listen(port, async () => {
        console.log(`Started AUTH service on port ${port}`);
        console.log(`Host from env is ${host}`);
        console.log(`Db url is ${db}`);
        console.log(`Api Url is ${apiUrl}`);
    })
}



app.get('/test', (req, res) => {
    res.send('Our AUTH server is working correctly ')
})
app.get("/currentUser", (req, res) => {
    res.json({
        id: "1234",
        email: "foo@gmail.com"
    });
});
app.get("/testApiData", (req, res) => {
    axios.get(apiUrl + '/testWithApiData').then(response => {
        console.log(response);
        res.json({
            dataFromApi: response.data
        });
    })

});

connectDb()
    .on('error', console.log)
    .on('disconnected', connectDb)
    .on('open', startServer)