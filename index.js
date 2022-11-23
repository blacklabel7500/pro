const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/dog', function (req, res) {
    res.json('<h1111>강아지</h1111>')
})

app.get('/cat', function (req, res) {
    res.json('고양이')
})

app.listen(3000)