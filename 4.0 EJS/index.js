import express from "express";
const app = express();
const port = 3000



app.get("/", (req, res) => {
    const day = new Date("2024-08-19T02:07:40.346Z").getDay()
    // console.log(day)

    let type = "a weekday"
    let adv = "work, SOAB"

    if(day === 0 || day === 6){
        // console.log("OK")
        type = "wekeeend"
        adv = "fuck of this shit"
    }

    res.render("index.ejs", {
        dayType: type,
        advice: adv
    })
});

app.listen(port, () => {
    console.log(`Listenig on port ${port}`);
});
