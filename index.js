import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { testConnection,query } from './database/db.js'

const app = express()
dotenv.config()

app.use(cors())
// Alternatif express.json itu body-parser
app.use(express.json())

app.get('/', (req,res)=>{
    return res.status(200).json("ok")
})

app.listen(process.env.APP_PORT, ()=>{
    testConnection()
    console.log(`Server is running at http://localhost:${process.env.APP_PORT}`)
})