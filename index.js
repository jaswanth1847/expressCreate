let express = require('express')
let app = express()

app.use(express.json()) // middle ware fun

app.get("/",(req,res)=>{
    res.send("req on homepage")
})

app.get("/search/:id/" , (req,res)=>{ // call back fun
    console.log(req.params.id)
    res.send("search done")
})

app.post("/add", (req,res)=>{
    console.log(req.body)
    res.send("save done")
})
app.listen(5000, ()=>{
    console.log("server start http://localhost:5000")
})