
const router = require("express").Router();

// Get all routes 
 
 
const Show = require('../models/Show.model');


router.get('/', async (req, res, next) => {
  try {
      const shows = await Show.find()
      res.status(200).json(shows)
  } catch (error) {
    next (error)
  }
});

// Get just onw show 
// @route GET /show/:showId

router.get('/:showId', async (req, res, next) => {
  const {showId} = req.params
  try {
      const show = await Show.find({_id: showId})
      res.status(200).json(show)
  } catch (error) {
    next (error)
  }
});

// POST show
// @route POST /show
 
router.post('/', async (req, res, next) => {
  try {
    const newShow = await Show.create(req.body)
    res.status(200).json(newShow)
  } catch (error) {
    next(error)
  }
});

// POST
// @route POST /:showId


router.put('/:showId', async (req, res, next) => {
  const {showId} = req.params
  try {
    const editedShow = await Show.findByIdAndUpdate(showId, req.body, {new: true})
    console.log(editedShow)
    res.status(202).json(newShow)
  } catch (error) {
    next(error)
  }
});

// POST
// @route DELETE /:showId


router.delete('/:showId', async (req, res, next) => {
  const {showId} = req.params
  try {
    const deletedShow = await Show.findByIdAndDelete(showId)
    console.log(deletedShow)
    res.status(201).json(deletedShow)
  } catch (error) {
    next(error)
  }
});
 
module.exports = router;