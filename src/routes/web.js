import express from 'express';
import { Router } from 'express';
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', (req, res) => {
        res.send('hello');
    });
    return app.use('/', router);
};
module.exports = initWebRoutes;
