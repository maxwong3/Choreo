const express = require("express");

const app = express();

app.use(express.json());

app.get("/api/myapi", (req, res) => {
    res.json({
        msg: "Response returned from Express"
    });
});

app.listen(5000, () => {
    console.log("Backend running on port 5000");
})

