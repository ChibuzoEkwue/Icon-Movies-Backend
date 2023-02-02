import mongoose from "mongoose";

const { Schema } = mongoose;

const movieSchema = new Schema(
	{
		title: String,
		overview: String,
		original_langauage: String,
		trailer: [{ type: String }],
		poster: String,
		backdrop: String,
		vote_average: Number,
		release_date: String,
		genre: [{ type: String }],
	},
	{
		timeStamps: true,
	}
);

const Movie = mongoose.model("movies", movieSchema);

export default Movie;
