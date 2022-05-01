import express from "express"
import cors from 'cors'
import db from "./database/db.js"
import catsRoutes from "./routes/routes.js"
// import path from "path"
// import { dirname } from 'path';
// import { fileURLToPath } from 'url';
// import dotenv from "dotenv"
import dotenv from 'dotenv'


dotenv.config()
console.log(process.env.DB_HOST);


const app = express()

app.set('port', process.env.PORT)

app.use(cors())
app.use(express.json())
app.use('/cats', catsRoutes)

try {
    await db.authenticate()
    console.log("Good Connection");
} catch (error) {
    throw new Error(error);
}

app.get('/', (req,res)=>{
    res.send("Hola Mundo!")
})


//En el puerto 8000 porq react usa el 3000
app.listen(app.get('port'),()=>{
    console.log(`Server on Port ${app.get('port')}`);
})