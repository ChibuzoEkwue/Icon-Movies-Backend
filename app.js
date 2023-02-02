import express from "express";
import mongoose from "mongoose";
import cors from "cors"
// Import Routes
import movieRoute from "./routes/movies.js";
import seriesRoute from "./routes/series.js";
import episodeRoute from "./routes/episode.js";
import featureRoute from "./routes/feature.js";
const app = express();
const port = process.env.PORT || 5500;

// Middleware
app.use(express.json());
app.use(cors())

// Connect to database
mongoose
	.set("strictQuery", false)
	.connect("mongodb://127.0.0.1:27017/movies")
	.then(() => console.log("Connected!"));

//Routes
app.use("/api/v1/health", (req, res) => {
	res.json({
		msg: "Health route, systems seems ok",
	});
});
app.use("/api/v1/movies", movieRoute);
app.use("/api/v1/series", seriesRoute);
app.use("/api/v1/episode", episodeRoute);
app.use("/api/v1/feature", featureRoute);

app.listen(port, () => {
	console.log("Server is running on port " + port);
});
