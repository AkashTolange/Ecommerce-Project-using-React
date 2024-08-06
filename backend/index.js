const port =4000;
const express =require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const { type } = require('os');

app.use(express.json());
app.use(cors());

//Database connection with mongodb
mongoose.connect("mongodb+srv://akashhtolangee77:AybizRb1f3EgndMy@cluster0.uxca9h0.mongodb.net/e-commerce");

//api creation
app.get("/", (req, res) => {
    res.send("Express is running on backend")
})

