import { Router } from "express";
import Movies from "../model/Movies.js";
const route = Router();

// Add a movie
route.post("/", async (req, res) => {
	try {
		const findIfExist = await Movies.findOne({ title: req.body.title });
		if (findIfExist) {
			res.status(401).json({
				msg: "Movie already exists",
			});
		}
		const response = await Movies.create(req.body);
		res.status(201).json(response);
	} catch (error) {
		res.status(500).json(error);
	}
});

//Get all movies
route.get("/", async (req, res) => {
	try {
		const movies = await Movies.find({}, { poster: 1 });
		res.status(201).json(movies);
	} catch (error) {
		res.status(500).json(error);
	}
});

// Get a particular movie details
route.get("/:id", async (req, res) => {
	try {
		const movieId = req.params.id;
		const movies = await Movies.findOne({ _id: movieId });
		res.status(201).json(movies);
	} catch (error) {
		res.status(500).json(error);
	}
});



export default route;
