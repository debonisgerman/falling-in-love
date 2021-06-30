import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// @desc Fetch all products
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  const pageSize = 12;
  const page = Number(req.query.pageNumber) || 1;
  let regex = new RegExp(req.query.keyword, "i");
  const category = req.query.category;
  const material = req.query.material;
  const section = req.query.section;

  let keyword;
  if (category || material || section) {
    if (req.query.keyword) {
      keyword = {
        $and: [
          {
            $or: [
              {
                name: regex,
              },
              {
                category: regex,
              },
              {
                section: regex,
              },
            ],
          },
        ],
      };
      category && keyword.$and.push({ category: category });
      material && keyword.$and.push({ material: material });
      section && keyword.$and.push({ section: section });
    } else {
      keyword = { $and: [] };
      category && keyword.$and.push({ category: category });
      material && keyword.$and.push({ material: material });
      section && keyword.$and.push({ section: section });
    }
  } else {
    keyword = req.query.keyword
      ? {
        $or: [
          { name: regex },
          { category: regex },
          { code: regex },
          { section: regex },
        ],
      }
      : {};
  }

  const count = await Product.countDocuments({ ...keyword });
  const products = await Product.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));
  res.json({ products, page, pages: Math.ceil(count / pageSize) });
});

const getFilters = asyncHandler(async (req, res) => {
  let regex = new RegExp(req.query.keyword, "i");
  const category = req.query.category;
  const material = req.query.material;
  const section = req.query.section;

  let keyword;
  if (category || material || section) {
    if (req.query.keyword) {
      keyword = {
        $and: [
          {
            $or: [
              {
                name: regex,
              },
              {
                category: regex,
              },
              {
                section: regex,
              },
            ],
          },
        ],
      };
      category && keyword.$and.push({ category: category });
      material && keyword.$and.push({ material: material });
      section && keyword.$and.push({ section: section });
    } else {
      keyword = { $and: [] };
      category && keyword.$and.push({ category: category });
      material && keyword.$and.push({ material: material });
      section && keyword.$and.push({ section: section });
    }
  } else {
    keyword = req.query.keyword
      ? {
        $or: [
          { name: regex },
          { category: regex },
          { code: regex },
          { section: regex },
        ],
      }
      : {};
  }

  const products = await Product.find({ ...keyword });

  const filters = {
    filters: {
      categories: [],
      materials: [],
      sections: [],
    },
  };
  filters.filters.categories = products
    .map((item) => item.category)
    .filter((value, index, self) => value && self.indexOf(value) === index);
  filters.filters.materials = products
    .map((item) => item.material)
    .filter((value, index, self) => value && self.indexOf(value) === index);
  filters.filters.sections = products
    .map((item) => item.section)
    .filter((value, index, self) => value && self.indexOf(value) === index);

  res.json(filters);
});

// @desc Fetch single product
// @route GET /api/products/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc Delete product
// @route DELETE /api/products/:id
// @access Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: "Product removed" });
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc Create product
// @route POST /api/products
// @access Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    user: req.user._id,
    name: "Nombre",
    image: "/images/logo.jpg",
    category: "Categoría",
    description: "Descripción",
    material: "",
    section: "Sección",
    code: "0",
    size: [],
    leading: false,
    stock: 0,
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

// @desc Update product
// @route PUT /api/products/:id
// @access Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const {
    name,
    image,
    category,
    description,
    material,
    section,
    code,
    leading,
    size,
    stock,
  } = req.body;

  console.log(size, req.body);

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name;
    product.image = image;
    product.category = category;
    product.description = description;
    product.material = material;
    product.section = section;
    product.code = code;
    product.leading = leading;
    product.size = size;
    product.stock = stock;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc Get top Rated Products
// @route get /api/products/top
// @access Public
const getTopProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({ leading: true }).sort({ leading: -1 }).limit(9);
  res.json(products);
});

export {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  getTopProducts,
  getFilters,
};
