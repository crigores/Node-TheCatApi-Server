import {Router} from 'express';
// import { getCats, createCat, getCat, deleteCat } from './cats.controller';
import * as CatCtrl from '../controllers/cats.controller';

const router = Router();

router.get('/cats', CatCtrl.getCats);
router.get('/cats/breed/:id', CatCtrl.getCatsByBreed);
router.get('/cats/category/:id', CatCtrl.getCatsByCategory);
router.post('/cats', CatCtrl.createCat);
router.get('/cats/:id', CatCtrl.getCat);
router.put('/cats/:id', CatCtrl.updateCat);
router.delete('/cats/:id', CatCtrl.deleteCat);

export default router;