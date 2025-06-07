// require("dotenv").config({path: "./env"})
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: "./env"
});

connectDB()
.then(() => {
    app.on("error", (err) => {
        console.log("Could not connect to app", err)
    })

    const PORT = process.env.PORT || 8000
    app.listen(PORT, () => {
        console.log(`Server is running at PORT ${PORT}`);
    })
})
.catch((err) => {
    console.log("Database connection failed!!! ERROR: ", err);
    process.exit(1);
})