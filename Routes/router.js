const express = require('express')
const router = new express.Router()
const userController = require('../Controllers/userController')
const jwtMiddleware = require('../Middlewares/jwtMiddleware')
const projectController = require('../Controllers/projectController')
const multerConfig = require('../Middlewares/multerMiddleware')


// register API
router.post('/user/register',userController.register)

// login
router.post('/user/login',userController.login)

// addproject
router.post('/project/add',jwtMiddleware,multerConfig.single('projectImage'),projectController.addProjects)

// user project
router.get('/user/all-projects',jwtMiddleware,projectController.allUserProjects)

// get all project
router.get('/projects/all',jwtMiddleware,projectController.getallProjects)

// get home project
router.get('/projects/home-projects',projectController.getHomeProjects)

// edit project
router.put('/projects/edit/:id',jwtMiddleware,multerConfig.single('projectImage'),projectController.editProjectController)

// delete project
router.delete('/projects/remove/:id',jwtMiddleware,projectController.deleteProjectController)

// update user
router.put('/user/edit',jwtMiddleware,multerConfig.single("profileImage"),userController.editUser)

// export router
module.exports = router
