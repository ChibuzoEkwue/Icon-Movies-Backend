import { Router } from "express";
import Episode from "../model/Episode.js";
const route = Router();

// Add seasons episode
route.post("/", async (req, res) => {
	try {
		const episode = await Episode.create(req.body);
		res.status(201).json(episode);
	} catch (error) {
		res.status(500).json(error);
	}
});

// get all episode of a season
route.get("/:id", async (req, res) => {
	try {
		const episode = await Episode.find({season_id:req.params.id})
		res.status(200).json(episode);
	} catch (error) {
		res.status(500).json(error);
	}
});



export default route;
