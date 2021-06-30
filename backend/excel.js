import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import xlsx from "node-xlsx";
import fs from "fs";
import path from "path";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    // Parse a file
    const workSheetsFromFile = xlsx.parse(
      `${path.resolve()}/backend/data/products.xlsx`
    );

    let productPages = workSheetsFromFile.filter(
      (pages) => pages.name === "PRODUCTOS"
    );

    const { data } = productPages[0];

    data.shift();

    const adminUser = await User.find();
    const user = adminUser.filter((user) => user.isAdmin === true)[0];
    let jsonData = [];

    let purgedData = data.filter((el) => el.length > 0);

    const getImage = (img) => {
      let image = img
        .trim()
        .split("/")
        .join("")
        .split('"')
        .join("")
        .split("°")
        .join("")
        .split("*")
        .join("")
        .split("`")
        .join("")
        .split("´")
        .join("")
        .split("ñ")
        .join("n")
        .split("Ñ")
        .join("N")
        .split("Ñ")
        .join("N")
        .split("ñ")
        .join("n")
        .split("Ñ")
        .join("n")
        .split("ñ")
        .join("n")
        .split(" ")
        .join("")
        .toUpperCase();
      let dirName = `${path.resolve()}/uploads`;
      let found = false;
      fs.readdirSync(dirName).forEach((folder) => {
        let imgFile = folder
          .trim()
          .split(".png")
          .join("")
          .split(".jpg")
          .join("")
          .split(".jpeg")
          .join("")
          .split(".webp")
          .join("")
          .split("ñ")
          .join("n")
          .split("Ñ")
          .join("N")
          .split("Ñ")
          .join("N")
          .split("ñ")
          .join("n")
          .split("Ñ")
          .join("n")
          .split("ñ")
          .join("n")
          .split(" ")
          .join("")
          .toUpperCase();
        if (imgFile === image) {
          found = true;
          image = folder;
        }
      });

      // if (!found) {
      //   console.log(img, image);
      // }

      return found ? `/uploads/${image}` : null;
    };

    for (let i = 0; i < purgedData.length; i++) {
      const img = getImage(data[i][5]);
      if (img) {
        jsonData.push({
          section: data[i][0],
          brand: data[i][1],
          category: data[i][2],
          code: data[i][3],
          material: data[i][4],
          name: data[i][5],
          // image: "/images/logo.jpg",
          image: img,
          description: data[i][5],
          user,
        });
      }
    }

    await Product.insertMany(jsonData);

    console.log("Data Imported!", jsonData.length);
    process.exit();
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

// console.log(jsonData);

importData();
