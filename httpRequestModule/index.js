import express from "express" ;

const app = express();

app.get("/", function(req, res){
    res.send("hello world");
});

app.post("/register", (req , res) => {
    res.sendStatus(201);
});

app.patch("/user/gourav", (req , res) => {
    res.sendStatus(200);
});

app.put("/user/gourav", (req , res) => {
    res.sendStatus(200);
});

app.delete("/user/gourav", (req , res) => {
    res.sendStatus(200);
});









app.listen(3000, function(){
    console.log("the server is running on port 3000.");
});