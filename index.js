const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT;

app.get('/', (req, res) => {
    res.sendFile('index.html');
})


app.use('/static', express.static(path.join(__dirname, 'static')))


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})