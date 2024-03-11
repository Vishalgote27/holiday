const asyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")
//cookie
//jwt verfy

exports.protectedRoute = asyncHandler(async (req, res, next) => {
    const { travler } = req.cookies
    if (!travler) {
        return res.status(400).json({ message: "No cookie Found" })
    }
    jwt.verify(travler, process.env.JWT_KEY, (err, decode) => {
        if (err) {
            return res.status(400).json({ message: err.message || "jwt Error" })
        }
        req.body.userId = decode.userId
        next()
    })

})