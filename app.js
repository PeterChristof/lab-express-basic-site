
const express = require("express");

// I'm creating a server named app
const app = express();

//Making everything inside the public folder available
app.use(express.static("public"));

// http://localhost:3000/home

app.get("/home", (request, response) => {
response.sendFile(__dirname + "/views/home.html")
});

//same as typing http://localhost:3000/about
app.get("/about", (request, response) => {
response.sendFile("/Users/petererian/Desktop/August_2021/Module2_week1/labs/lab-express-basic-site/views/about.html")
});

app.get("/works", (request, response) => {
    response.sendFile("/Users/petererian/Desktop/August_2021/Module2_week1/labs/lab-express-basic-site/views/works.html")
    });

app.listen(3000, () => console.log("listening on port 3000"));

