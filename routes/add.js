const Router = require('express')
const {validationResult}  = require('express-validator/check')
const Course = require('../models/course')
const auth = require('../middleware/auth')
const {courseValidators} = require('../utils/validators')
const router = Router()

router.get('/', auth , (req, res) => {
    res.render('add', {
        title: 'Add Course',
        isAdd: true
    })
})

router.post('/', auth , async (req, res) => {
    const course = new Course({
        title: req.body.title,
        price: req.body.price,
        img: req.body.img,
        userId: req.user
    })

    try {
        await course.save()
        res.redirect('/courses')
    } catch (e) {
        console.log(e)
    }
})

module.exports = router