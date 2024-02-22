import express from "express";
const app = express();
const port = 3000;

app.get("/", (req , res)=>{
    res.send("hello duniya");
})



app.listen(port, () => {
    console.log("Our server is up and running on port" + port);
})