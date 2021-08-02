import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import Department from "./models/departmentModel.js";
import departments from "./data/provinces.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    
    const newDep = await Department.insertMany(departments);

    console.log("Data Imported!", newDep);
    process.exit();
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};


importData();
