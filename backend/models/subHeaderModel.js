import mongoose from "mongoose";

const subHeaderSchema = mongoose.Schema(
    {
        description: {
            type: String,
            required: true,
        },
        show: { type: Boolean }
    }
);

const SubHeader = mongoose.model("SubHeader", subHeaderSchema);

export default SubHeader;