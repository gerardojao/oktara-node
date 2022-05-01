import express from 'express'
import { createCats, deleteCats, getAllCats, getCatsById, updateCats } from '../controllers/BlogController.js'
const router = express.Router()

 router.get('/', getAllCats)
 router.get('/:id', getCatsById)
 router.post('/', createCats)
 router.put('/:id',updateCats)
 router.delete('/:id', deleteCats)

 export default router

