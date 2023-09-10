import { Router } from 'express'
import AccessController from '~/controllers/access.controller'
import asyncHandler from '~/helpers/asyncHandler'
import { authentication } from '~/middleware/auth.middleware'

const router: Router = Router()

// router.get('/login', asyncHandler(AccessController.login))
router.post('/signup', asyncHandler(AccessController.signup))
router.post('/login', asyncHandler(AccessController.login))

router.use(authentication)

router.post('/logout', asyncHandler(AccessController.logout))
// router.post('/refresh-token', asyncHandler(AccessController.refreshToken))

export default router
