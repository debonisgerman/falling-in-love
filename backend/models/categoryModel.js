import mongoose from "mongoose";

const categorySchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        showInHome: { type: Boolean }
    }
);

const Category = mongoose.model("Category", categorySchema);

export default Category;