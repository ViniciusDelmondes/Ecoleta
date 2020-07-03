import express from 'express';
import multer from 'multer'
import multerConfig from './config/multer'

import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';


const routes = express.Router(); 
const upload = multer(multerConfig);


const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);


routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

// O single serve para informar que só será realizado o upload de apenas uma foto

routes.post('/points', upload.single('image'), pointsController.create);


//index: para listagem
// Show: exibir um unico registro

export default routes;