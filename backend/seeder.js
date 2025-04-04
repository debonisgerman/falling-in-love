import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import products from "./data/products.js";
import departments from "./data/departments.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import Banner from "./models/bannerModel.js";
import Department from "./models/departmentModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    // await Order.deleteMany();
    // await Product.deleteMany();
    // await User.deleteMany();
    // // await Banner.deleteMany();

    // const createdUsers = await User.insertMany(users);
    // const adminUser = createdUsers[0]._id;

    // const sampleProducts = products.map((product) => {
    //   return { ...product, user: adminUser };
    // });

    // await Product.insertMany(sampleProducts);

    // const createdDepartments = await Department.insertMany(departments);


    console.log("Data Imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error.message}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error.message}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === '-d'){
    destroyData();
} else {
    importData();
}