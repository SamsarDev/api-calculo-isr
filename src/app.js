import express from "express"
import morgan from "morgan"
import pkg from "../package.json"


const app = express()

app.use(express.json())
app.use(morgan('dev'))

// Routes

app.get('/', (req, res) => {
    res.json({
        message: "Prueba práctica: Samuel Sarmientos",
        info: {
            author: pkg.author,
            description: pkg.description,
            version: pkg.version,
            license: pkg.license
        }
    })
})

export default app;
