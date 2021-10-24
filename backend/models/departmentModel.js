import mongoose from "mongoose";

const departmentSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        provinces: [{
            name: {
                type: String,
                required: true,
            },
            districts: [{
                name: {
                    type: String,
                    required: true,
                },
            }]
        }]
    }
);

const Department = mongoose.model("Department", departmentSchema);

export default Department;