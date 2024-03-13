import ejs from "ejs";
import express from "express";

const app = express();
const port = 3000;

app.set("view engine", "ejs");
const today = new Date();

app.get("/", (req, res) => {
    if (today.getDay() == 0 || today.getDay() == 6){
        res.render("index", {day: "weekend", message: "have fun"});
    }
    else
    {
        res.render("index", {day: "weekday", message: "work hard"});
    }
});

app.listen(port, function () {
    console.log(`listening to port ${port}`);
});