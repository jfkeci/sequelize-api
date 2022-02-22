import db from '../models/index.js'

const Review = db.reviews

export const getReviews = async (req, res) => {
    const reviews = await Review.findAll({})

    return res.status(200).json(reviews)
}

export const getReview = async (req, res) => {
    const review = await Review.findAll({ where: { id: req.params.id } })

    return res.status(200).json(review)
}

export const createReview = async (req, res) => {
    const review = req.body

    const newReview = await Review.create(review)

    if (newReview) return res.status(200).json(newReview)

    return res.status(500).json({ message: 'Error' })
}

export const updateReview = async (req, res) => {
    const { description } = req.body

    let review = await Review.findAll({ where: { id: req.params.id } })

    if (review) {
        review.description = description
        review = await Review.update(review, { where: { id: req.params.id } })
        return res.status(200).json(review)
    }

    return res.status(404).json({ message: 'Error' });
}

export const deleteReview = async (req, res) => {
    const isDeleted = await Review.destroy({ where: { id: req.params.id } });

    if (isDeleted) return res.status(200).json({ message: 'Success' })

    return res.status(500).json({ message: 'Error' })
}