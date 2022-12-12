const express = require('express')

const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use(express.json())

app.get('/', (req, res) => {
    res.render('index', {paypalClientID: 'AZf-fEPTqWpP53GQxLWz57mi3OfqFUnmN3PBA0eIumPLurIm3ASAVUGw1x9fKxxYZOxfYyfkuWEo6ced'})
})

app.listen(3000)