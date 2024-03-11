const { placeOrder, userOrderHistory } = require("../controller/orderController")
const { protectedRoute } = require("../utlis/protected")

const router = require("express").Router()

router
    .post("/place-order", protectedRoute, placeOrder)
    .get("/hitory", protectedRoute, userOrderHistory)

module.exports = router