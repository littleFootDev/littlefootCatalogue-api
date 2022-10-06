import {Router} from 'express';

import {createCatalogue, getAllCatalogue, getCatalogue,updateCatalogue, deleteCatalogue} from '../controllers/catalogue.controller';

const catalogueRouter = Router();

catalogueRouter.post('/createCatalogue', createCatalogue);
catalogueRouter.get('/', getAllCatalogue);
catalogueRouter.get('/:id', getCatalogue);
catalogueRouter.patch('/update/:id', updateCatalogue);
catalogueRouter.delete('/delete/:id', deleteCatalogue);



export {catalogueRouter};