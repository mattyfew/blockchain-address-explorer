const express = require('express')
const app = express()

app.use(express.static('client'))

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/client/index.html`)
})

app.set('port', process.env.PORT || 8080);
app.listen(app.get('port'), () => {
    console.log("listening on port 8080");
})
