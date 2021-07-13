import mongoose from "mongoose";

const materialSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
    }
);

const Material = mongoose.model("Material", materialSchema);

export default Material;