const express =require("express");
const cors =require("cors");
const dotenv =require("dotenv");
const bodyParser =require("body-parser");

dotenv.config();
const app = express();
app.use(bodyParser.json());
const PORT = 8080;


app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
});
