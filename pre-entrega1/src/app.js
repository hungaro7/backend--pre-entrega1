//Desarrollar un servidor express que, en su archivo app.js importe al archivo de productManager.

const express = require("express"); 
const productRouter = require("./routes/products.router.js");
const cartRouter = require("./routes/carts.router.js");
const app = express(); 
const PUERTO = 8080;

//Middleware: 
app.use(express.json()); 
//Le decimos al servidor que vamos a trabajar con JSON. 

//Rutasd
app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);


app.listen(PUERTO, () => {
    console.log(`Escuchando en el http://localhost:${PUERTO}`); 
})