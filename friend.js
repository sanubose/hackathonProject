const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/recognize", async (req, res) => {
    res.json({ text: "Speech recognition is handled on the frontend" });
});

app.listen(5000, () => console.log("Server running on port 5000"));
no