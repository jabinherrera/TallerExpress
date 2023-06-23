import { Router } from 'express';

import {
    registerUser,
} from '../controllers/user.controller.js'

const router = Router();

router.post('/users', registerUser)

export default router;