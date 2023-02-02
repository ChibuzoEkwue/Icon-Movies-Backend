import mongoose from "mongoose";

const { Schema } = mongoose;

const episodeSchema = new Schema(
	{
		title: String,
		overview: String,
		air_date: String,
		runtime: Number,
		still_path: String,
		season_id: String,
		episode_number:Number
	},
	{
		timeStamps: true,
	}
);

const Episode = mongoose.model("episode", episodeSchema);

export default Episode;
