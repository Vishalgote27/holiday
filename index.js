const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const cookiesParser = require("cookie-parser")
require("dotenv").config({ path: "./.env" })

const path = require("path")

const app = express()

//middlewares
app.use(express.json())
app.use(cookiesParser())
app.use(express.static("dist"))
app.use(express.static("uploads"))
app.use(cors(
    {
        // origin: "http://localhost:5173",
        origin: "https://holiday-1.onrender.com",
        credentials: true
    }
))

//route
app.use("/api/admin", require("./routes/adminRoute"))
app.use("/api/public", require("./routes/publicRoute"))
app.use("/api/auth", require("./routes/authRoute"))
app.use("/api/order", require("./routes/orderRoute"))



//404
app.use("*", (req, res) => {
    // res.status(404).json({ message: "Resource Not Found" })
    res.sendFile(path.join(__dirname, "dist", "index.html"))
})


//error handler
app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({ message: err.message || "Something went Wrong" })
})

//db
mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open", () => {
    console.log("Mongo DB Connected")
    app.listen(process.env.PORT, console.log("Server is Running"))
})