const express = require('express')
const app = express()

app.use(express.static('client'))

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/src/index.html`)
})

app.listen(process.env.PORT || 8080, () => {
    console.log("listening on port 8080");
})
