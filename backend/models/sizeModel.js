import mongoose from "mongoose";

const sizeSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
    }
);

const Size = mongoose.model("Size", sizeSchema);

export default Size;