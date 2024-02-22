import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;


  const options = {
    method: "GET",
    url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
    headers: {
      accept: 'application/json',
      'X-RapidAPI-Key': '8bd59f3147msh3e2814f90f7400ep1d95a8jsna91145530d4b',
      'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
    }
  };
  


app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use("/public/images/", express.static("public/images"));
app.use(bodyParser.urlencoded({extended: true}));


app.get("/", async (req, res) => {
   try{
    const result = await axios.request(options);
    console.log(result.data.value );
    res.render("index.ejs", {jokes: result.data.value });
   } catch (error) {
    res.status(404).send(error.message);
   }
});



app.get("/categories", async(req, res) => {
  
  const options1 = {
    method: "GET",
    url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/categories',
    headers: {
      accept: 'application/json',
      'X-RapidAPI-Key': '8bd59f3147msh3e2814f90f7400ep1d95a8jsna91145530d4b',
      'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
    }
  }

  try{
    const result = await axios.request(options1);
    console.log(result.data);
    res.render("categories.ejs", {content: result.data});
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.post("/categories", async (req, res) => {
  res.render("categories.ejs");
  res.redirect("/categories")
});

app.get("/search", (req, res) => {
  res.render("search.ejs", {content: "wating for input"});
});


app.post("/search", (req, res) => {
    res.render("search.ejs");
    res.redirect("/search");
});

app.get("/search-item", async(req, res) => {
  res.render("search.ejs");
  res.redirect("/search-item");
});

app.post("/search-item", async(req, res) => {

  const searchItem = req.body.searchItem;
  console.log(searchItem);
  const options2 = {
    method: 'GET',
    url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/search',
    params: {
      query: `${searchItem}`
    },
    headers: {
      accept: 'application/json',
      'X-RapidAPI-Key': '8bd59f3147msh3e2814f90f7400ep1d95a8jsna91145530d4b',
      'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
    }
  };

  try {
    const result = await axios.request(options2);
    const data = result.data;
    console.log(data);
    res.render("search.ejs", {content: data[Math.floor(Math.random() * data.length)]});
    res.send(data[Math.floor(Math.random() * data.length)]);
  } catch (error) {
  res.status(404).send(error.message);
  } 
});




app.listen(port, () => {
    console.log(`server is up and running on port ${port}`);
});



