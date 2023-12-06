const express = require('express')
const router = express.Router()

// importig controllers

const {handlePostCategories, handleGetCategories, handleUpdateCategories, handleCategoryDelete, handleCategoryOne} = require('../controllers/categories')

const {handleCreatePrompts, handleGetAllPrompts,handleUpdatePrompts, handlPromptsDelete, handlePromptsOne} = require('../controllers/prompts')


// categories routes

router.post('/createCategory',handlePostCategories)
router.get('/getCategoriesList',handleGetCategories)
router.put('/updateCategories/:id',handleUpdateCategories)
router.delete('/deleteCategory/:id',handleCategoryDelete)
router.get('/getOneCategory/:id',handleCategoryOne)

// propmts routes
router.post('/createPrompts',handleCreatePrompts)
router.get('/getAllPrompts',handleGetAllPrompts)
router.put('/updatePrompts/:id',handleUpdatePrompts)
router.delete('/deletePrompt/:id',handlPromptsDelete)
router.get('/getOnePrompt/:id',handlePromptsOne)

module.exports = router