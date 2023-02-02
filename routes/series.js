import { Router } from "express";
import Series from "../model/Series.js";
const route = Router();

// Add a series
route.post("/", async (req, res) => {
	try {
		const findIfExist = await Series.findOne({ title: req.body.title });
		if (findIfExist) {
			return res.status(401).json({
				msg: "Series already exists",
			});
		}
		const response = await Series.create(req.body);
		res.status(201).json(response);
	} catch (error) {
		res.status(500).json(error);
	}
});

// Add seasons
route.post("/:id", async (req, res) => {
	const seriesId = req.params.id; //63d8ea65ad43abe03800c912
	try {
		const series = await Series.findOne({ _id: seriesId });
		if (!series) {
			return res.status(401).json({
				msg: "Series already exists",
			});
		}
		const updateSeason = await Series.updateOne(
			{ _id: seriesId },
			{
				$push: {
					seasons: { season_no: req.body.season_no, trailer: req.body.trailer },
				},
			}
		);
		res.status(201).json({ msg: "added" });
	} catch (error) {
		res.status(500).json(error);
	}
});



// get all series
route.get("/", async (req, res) => {
	try {
		const series = await Series.find({}, { poster: 1 });
		res.status(201).json(series);
	} catch (error) {
		res.status(500).json(error);
	}
});

// Get series details
route.get("/:id", async (req, res) => {
	try {
		const seriesId = req.params.id;
		const series = await Series.findOne({ _id: seriesId });
		res.status(201).json(series);
	} catch (error) {
		res.status(500).json(error);
	}
});

export default route;
