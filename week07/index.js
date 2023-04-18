import express from 'express'
import redis from 'redis'

const app = express()
const port = 80
const db = redis.createClient({
    url: 'redis://localhost:6379'
})
await db.connect()

app.get('/', async(req, res) => {
    const count = await db.incr("count")
    res.send(`count: ${count}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
 
app.use(express.static('nemesis-chungus/spring2023/week07/public'))