import path from "path";
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import cors from 'cors';
import morgan from "morgan";
import connectDB from "./config/db.js";


import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import bannerRoutes from "./routes/bannerRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import materialRoutes from "./routes/materialRoutes.js";
import sectionRoutes from "./routes/sectionRoutes.js";
import colorRoutes from "./routes/colorRoutes.js";
import sizeRoutes from "./routes/sizeRoutes.js";
import departmentRoutes from "./routes/departmentRoutes.js";
import subHeaderRoutes from "./routes/subheaderRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import mailRoutes from "./routes/mailRoutes.js";

import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

dotenv.config();

connectDB();

const app = express();

if (process.env.NODE_ENV === "development")
{
  app.use(morgan("dev"));
}

app.use(express.json());

http.get('*', function (req, res) {
  res.redirect('https://' + req.headers.host + req.url);
})

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/banners", bannerRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/materials", materialRoutes);
app.use("/api/sections", sectionRoutes);
app.use("/api/colors", colorRoutes);
app.use("/api/sizes", sizeRoutes);
app.use("/api/departments", departmentRoutes);
app.use("/api/subheaders", subHeaderRoutes);
app.use("/api/profiles", profileRoutes);
app.use("/api/mails", mailRoutes);

app.get("/api/config/paypal", (req, res) =>
  res.send(process.env.PAYPAL_CLIENT_ID)
);

const __dirname = path.resolve();
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

if (process.env.NODE_ENV === "production")
{
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else
{
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

app.use(notFound);

app.use(errorHandler);
app.use(cors());


const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
