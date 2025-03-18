import express from "express"
const app = express()
import dotenv from "dotenv";
dotenv.config()
import cors from "cors"
import configureDB from "./config/db.js"
configureDB()
import authController from "./app/controllers/authController.js";
import productController from "./app/controllers/productController.js";
import userValidationSchema from "./app/validators/userValidation-schema.js";
import idValidationSchema from "./app/validators/id-validationSchema.js";
import { checkSchema } from "express-validator";
app.use(express.json())
app.use(cors())
const PORT = process.env.PORT || 3050

app.post("/register",checkSchema(userValidationSchema),authController.register)
app.post("/login",authController.login)

app.get("/products",productController.list)
app.get("/products/:id",checkSchema(idValidationSchema),productController.show)

app.listen(PORT,()=>{
    console.log(`Server is running successfully on port ${PORT}`)
})