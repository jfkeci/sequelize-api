import express from 'express'
let router = express.Router();

import {
    createReview,
    getReview,
    getReviews,
    updateReview,
    deleteReview,
} from "../controllers/reviews.js";

router.get('/', getReviews);
router.post('/', createReview);
router.get('/:id', getReview);
router.delete('/:id', deleteReview);
router.patch('/:id', updateReview);


export default router;

