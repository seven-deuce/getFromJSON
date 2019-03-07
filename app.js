const express = require("express")
let app = express()
const fs = require("fs")
const path = require("path")
const ejs = require("ejs")
const port = process.env.PORT || 3000

app.enable('trust proxy');
app.use("/public", express.static(__dirname + "/public"))
app.set("view engine", "ejs")
app.set('views', './views')

//routing to pages
app.get("/", (req, res) => { res.render("index") })


//handeling wrong requests at the end
app.use(function(req, res) {
    res.status(404);
    res.send("<h1 style='width:50%; margin: 20px 20px;'>No page found for your request! </h1>")
})

app.listen(port, console.log(`app is listening on ${port}`))
