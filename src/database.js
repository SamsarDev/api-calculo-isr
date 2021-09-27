require('dotenv').config()
import { HOST, DB_NAME } from "./config"
import mongoose from "mongoose"

mongoose.connect(`mongodb://${HOST}/${DB_NAME}`)
    .then(() => console.log(`DB: ${DB_NAME} conectada`))
    .catch(error => console.error(error))
