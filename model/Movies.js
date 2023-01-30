import mongoose from "mongoose";

const { Schema } = mongoose;

const movieSchema = new Schema({
	title: String,
});
