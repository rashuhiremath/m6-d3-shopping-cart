import express from "express"
import cors from "cors"
import listEndpoints from "express-list-endpoints"
import {buildConnection,connectDb} from "./db/index.js"
import productsRouter from "./services/product/index.js"
import reviewsRouter from "./services/reviews/index.js"
const server = express()
server.use(cors())
server.use(express.json())

server.use("/products",productsRouter)
server.use("/reviews",reviewsRouter)

const port = process.env.PORT


console.table(listEndpoints(server))

server.listen(port,async () =>{console.log("listening on port:", port)
await buildConnection()
await connectDb()
 })

server.on('error', (err) => console.log(err))