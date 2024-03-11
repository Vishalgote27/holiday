const { adminGetAllHoliday, adminAddHoliday, adminUpdateHoliday, adminDeleteHoliday } = require("../controller/adminController")

const router = require("express").Router()

router
    .get("/holidays", adminGetAllHoliday)
    .post("/add-holiday", adminAddHoliday)
    .put("/update-holiday/:id", adminUpdateHoliday)
    .delete("/delete-holiday/:id", adminDeleteHoliday)


module.exports = router