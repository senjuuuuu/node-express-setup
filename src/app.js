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

// Handle error
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
  });
  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        message: error.message,
      },
    });
  });
  
module.exports = app
