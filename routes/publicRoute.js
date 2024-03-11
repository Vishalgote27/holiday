const { getTours, getToursDetails } = require("../controller/publicController")

const router = require("express").Router()

router
    .get("/tours", getTours)
    .get("/tours/:id", getToursDetails)



module.exports = router