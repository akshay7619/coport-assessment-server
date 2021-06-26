const express = require("express");
const app = express();
const cors = require("cors");
const { json } = require("body-parser");

//middleware
app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
	res.send("we are at home");
});


//port
app.listen(3000);
