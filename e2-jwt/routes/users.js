import express from 'express'
let router = express.Router();

import {
    getUsers,
    getUser,
    registerUser,
    loginUser,
} from "../controllers/users.js";

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/register', registerUser);
router.post('/login', loginUser);


export default router;

