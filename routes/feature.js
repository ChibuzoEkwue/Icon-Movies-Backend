import { Router } from "express";
import Movies from "../model/Movies.js";
const route = Router();

route.get("/", async (req, res) => {
	try {
		const count = await Movies.countDocuments();
		console.log(count)
		// Get a random entry
		const random = Math.floor(Math.random() * count);
		// Again query all users but only fetch one offset by our random #
		const featuredMovie = await Movies.find();
		console.log(featuredMovie)
		res.status(200).json(featuredMovie);
	} catch (error) {
		res.status(500).json(error);
	}
});

export default route;
