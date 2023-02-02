import mongoose from "mongoose";

const { Schema } = mongoose;

const seriesSchema = new Schema({
	title: String,
	overview: String,
	original_langauage: String,
	genre: [{type:String}],
	poster: String,
	backdrop: String,
	vote_average: Number,
	origin_country: [{type:String}],
	first_air_date: String,
	seasons: [{ season_no: Number, trailer: [{ type: String }] }]
});

const Series = mongoose.model("series", seriesSchema, "series");

export default Series;
