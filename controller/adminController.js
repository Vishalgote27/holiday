const asyncHandler = require("express-async-handler")
const Holiday = require("../models/Holiday")
const upload = require("../utlis/upload")


exports.adminGetAllHoliday = asyncHandler(async (req, res) => {
    const result = await Holiday.find()
    res.json({ message: "Admin holiday featch success", result })
})

exports.adminAddHoliday = asyncHandler(async (req, res) => {
    upload(req, res, async err => {
        if (err) {
            return res.status(400).json({ message: err.message || "upload error" })
        }

        const hero = []
        if (req.files) {
            for (const item of req.files) {
                hero.push(item.filename)
            }
        }
        await Holiday.create({ ...req.body, hero })
        res.json({ message: "admin holiday add success" })
    })

})

exports.adminUpdateHoliday = asyncHandler(async (req, res) => {
    res.json({ message: "admin holiday Update success" })

})

exports.adminDeleteHoliday = asyncHandler(async (req, res) => {
    res.json({ message: "admin holiday Delete success" })

})
