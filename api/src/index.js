const express = require('express');
const { connectDb } = require('./helper/db');
const { port, host, db, authApiUrl } = require('./config');
const axios = require('axios')
const mongoose = require('mongoose');
const app = express()

const postSchema = new mongoose.Schema({
    name: String
})
const Post = mongoose.model('Post', postSchema)

const createPosts = async () => {
    const onePost = new Post({ name: "First post" })
    const twoPost = new Post({ name: "Two post" })
    const threePost = new Post({ name: "Three post" })
    await onePost.save()
    await twoPost.save()
    await threePost.save()

}

const startServer = () => {
    app.listen(port, async () => {
        console.log(`Started api service on port ${port}`);
        console.log(`Host from env is ${host}`);
        console.log(`Db url is ${db}`);
        // createPosts()

        const posts = await Post.find()
        posts.forEach(p => {
            console.log("posts in db", p.name);
        })


        // const newPost = new Post({ name: "First post" })

        // const newPost = new Post({ name: "First post" })
        // console.log(newPost);
    })
}



app.get('/test', (req, res) => {
    res.send('Our api server is working correctly with auto updates')
})
app.get('/testwithcurrentuser', (req, response) => {
    console.log("auth api url", authApiUrl);
    axios.get(authApiUrl + '/currentUser').then(res => {
        response.json({
            testwithcurrentuser: true,
            currentUser: res.data
        })
    })

})
app.get('/api/testWithApiData', (req, response) => {
    response.json({
        testWithApi: true,
    })

})

connectDb()
    .on('error', console.log)
    .on('disconnected', connectDb)
    .on('open', startServer)