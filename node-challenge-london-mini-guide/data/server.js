import express from "express";
import Harrow from "./Harrow.json" assert {type: "json"};
import Stratford from "./Stratford.json" assert {type: "json"};

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send({ Harrow, Stratford });
})

app.get("/:city/pharmacies", (req, res) => {
    const city = req.params.city.toLowerCase();
    if (city === "harrow") {
        const pharmacies = Harrow.pharmacies;
        return res.send({ pharmacies });
    }
    if (city === "stratford") {
        const pharmacies = Stratford.pharmacies;
        return res.send({ pharmacies });
    }
})

app.get("/:city/colleges", (req, res) => {
    const city = req.params.city.toLowerCase();
    if (city === "harrow") {
        const colleges = Harrow.colleges;
        return res.send({ colleges });
    }
    if (city === "stratford") {
        const colleges = Stratford.colleges;
        return res.send({ colleges });
    }
})

app.get("/:city/doctors", (req, res) => {
    const city = req.params.city.toLowerCase();
    if (city === "harrow") {
        const doctors = Harrow.doctors;
        return res.send({ doctors });
    }
    if (city === "stratford") {
        const doctors = Stratford.doctors;
        return res.send({ doctors });
    }
})

app.get("/:city/hospitals", (req, res) => {
    const city = req.params.city.toLowerCase();
    if (city === "harrow") {
        const hospitals = Harrow.hospitals;
        return res.send({ hospitals });
    }
    if (city === "stratford") {
        const hospitals = Stratford.hospitals;
        return res.send({ hospitals });
    }
})

app.listen(3000, () => {
    console.log("Your app is listening on port 3000");
})