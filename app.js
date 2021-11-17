// 1. IMPORTACIONES
const express 		= require("express")
const app			= express()

require("dotenv").config()

// 2. MIDDLEWARES
app.use(express.static('public'))

app.set("views", __dirname + "/views")
app.set("view engine", "hbs")




// 3. RUTAS
app.get("/", (req, res) => {
	res.render("index")

})

app.get("/about", (req, res) => {
	res.render("about")
})

app.get("/works", (req, res) => {
	res.render("works")
})

app.get("/photos", (req, res) => {
	res.render("photos")
})



// 4. SERVIDOR
app.listen(process.env.PORT, () => {
	console.log(`Servidor activo en puerto ${process.env.PORT}`)
})