import express from "express";
import Harrow from "./Harrow.json" assert {type: "json"};
import Stratford from "./Stratford.json" assert {type: "json"};

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send({ Harrow, Stratford });
})

app.get("/:city/:category", (req, res) => {
    const city = req.params.city.toLowerCase();
    const category = req.params.category.toLowerCase();

    if (city === "harrow") {
        const categories = Harrow[category];
        const val = { [category]: categories }
        return res.send(val);
    }
    if (city === "stratford") {
        const categories = Stratford[category];
        const val = { [category]: categories };
        return res.send(val);
    }
})

app.listen(3000, () => {
    console.log("Your app is listening on port 3000");
})