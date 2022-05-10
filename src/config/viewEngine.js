import express from 'express';
import path from 'path';

let configViewEngine = (app) => {
    app.use(express.static(path.join(__dirname, 'public')));
    app.set('view engine', 'ejs');
    app.set('views', './src/views');
};
module.exports = configViewEngine;
