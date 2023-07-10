import express from 'express'
import { logInController, signUpController } from '../controllers/auth.js'
import {  follow, unfollow, getAllUsers, updateProfile } from '../controllers/users.js'
import auth from '../middleware/auth.js'

const router = express.Router()

router.post('/signup', signUpController)
router.post('/login', logInController)

router.get('/getAllUsers', getAllUsers)
router.patch('/update/:id', auth, updateProfile)
router.put("/follow/:id", auth, follow);
router.put("/unfollow/:id", auth, unfollow);
export default router