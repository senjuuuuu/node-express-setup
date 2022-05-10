import express from 'express'
import viewEngine from './config/viewEngine'
import initWebRoute from './routes/web'
require('dotenv').config()
let app = express()

//
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//config view engine
viewEngine(app)

//routes
initWebRoute(app)

// let port = process.env.PORT || 8080;
// app.listen(port, () => {
//     console.log('Chat bot is running from port: ' + port);
// });
module.exports = app
