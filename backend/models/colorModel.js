import mongoose from "mongoose";

const colorSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        color: {
            type: String,
        },
    }
);

const Color = mongoose.model("Color", colorSchema);

export default Color;