import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
import Category from "../models/categoryModel.js";
import Material from "../models/materialModel.js";
import Section from "../models/sectionModel.js";
import Color from "../models/colorModel.js"

// @desc Fetch all products
// @route GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  const pageSize = 12;
  const page = Number(req.query.pageNumber) || 1;
  let regex = new RegExp(req.query.keyword, "i");
  let category = req.query.category;
  let material = req.query.material;
  let section = req.query.section;
  let color = req.query.color;
  let price = req.query.price;
  let priceTo;
  let priceFrom;

  if (price)
  {
    if (price.indexOf("to") !== -1)
    {
      priceTo = price.split("to")[1];
      priceFrom = price.split("to")[0];
    } else
    {
      priceFrom = price;
    }
  }
  console.log("HERE");
  if (category)
  {
    category = await Category.findOne({ name: { $regex: category } });
    console.log("ASDASDASDAS");
    console.log("CATE", category);
    if (category)
    {
      category = category._id;
    }
  }

  if (material)
  {
    material = await Material.findOne({ name: { $regex: material } });
    if (material)
    {
      material = material._id;
    }
  }

  if (section)
  {
    section = await Section.findOne({ name: { $regex: section } });
    if (section)
    {
      section = section._id;
    }
  }

  if (color)
  {
    color = await Color.findOne({ name: { $regex: color } });
    if (color)
    {
      color = color._id;
    }
  }

  console.log(price, priceFrom, priceTo, color);

  let keyword;
  if (category || material || section || priceFrom || priceTo)
  {
    if (req.query.keyword)
    {
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
              {
                color: regex,
              },
            ],
          },
        ],
      };
      category && keyword.$and.push({ category: category });
      material && keyword.$and.push({ material: material });
      section && keyword.$and.push({ section: section });
      color && keyword.$and.push({ 'variants.color': color });
      priceFrom && keyword.$and.push({ price: { $gte: priceFrom } });
      priceTo && keyword.$and.push({ price: { $lte: priceTo } });
    } else
    {
      keyword = { $and: [] };
      category && keyword.$and.push({ category: category });
      material && keyword.$and.push({ material: material });
      section && keyword.$and.push({ section: section });
      color && keyword.$and.push({ 'variants.color': color });
      priceFrom && keyword.$and.push({ price: { $gte: priceFrom } });
      priceTo && keyword.$and.push({ price: { $lte: priceTo } });
    }
  } else
  {
    keyword = req.query.keyword
      ? {
        $or: [
          { name: regex },
          { category: regex },
          { code: regex },
          { section: regex },
          { color: regex },
        ],
      }
      : {};
  }

  console.log("key", keyword);

  const count = await Product.countDocuments({ ...keyword });
  const products = await Product.find({ ...keyword })
    .populate('category')
    .populate('section')
    .populate('material')
    .populate('variants.color')
    .populate('variants.sizes.size')
    .limit(pageSize)
    .skip(pageSize * (page - 1));
  res.json({ products, page, pages: Math.ceil(count / pageSize) });
});

const getShopProducts = asyncHandler(async (req, res) => {
  const pageSize = 12;
  const page = Number(req.query.pageNumber) || 1;
  let regex = new RegExp(req.query.keyword, "i");
  let category = req.query.category;
  let material = req.query.material;
  let section = req.query.section;
  let color = req.query.color;
  let price = req.query.price;
  let priceTo;
  let priceFrom;

  if (price)
  {
    if (price.indexOf("to") !== -1)
    {
      priceTo = price.split("to")[1];
      priceFrom = price.split("to")[0];
    } else
    {
      priceFrom = price;
    }
  }

  if (category)
  {
    category = await Category.findOne({ name: { $regex: category } });
    console.log("category", category)
    if (category)
    {
      category = category._id;
    }
  }

  if (material)
  {
    material = await Material.findOne({ name: { $regex: material } });
    if (material)
    {
      material = material._id;
    }
  }

  if (section)
  {
    section = await Section.findOne({ name: { $regex: section } });
    if (section)
    {
      section = section._id;
    }
  }

  if (color)
  {
    color = await Color.findOne({ name: { $regex: color } });
    if (color)
    {
      color = color._id;
    }
  }

  console.log(price, priceFrom, priceTo);

  let keyword;
  if (category || material || section || color || priceFrom || priceTo)
  {
    if (req.query.keyword)
    {
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
              {
                color: regex,
              },
            ],
          },
        ],
      };
      category && keyword.$and.push({ category: category });
      material && keyword.$and.push({ material: material });
      section && keyword.$and.push({ section: section });
      color && keyword.$and.push({ 'variants.color': color });
      priceFrom && keyword.$and.push({ price: { $gte: priceFrom } });
      priceTo && keyword.$and.push({ price: { $lte: priceTo } });
    } else
    {
      keyword = { $and: [] };
      category && keyword.$and.push({ category: category });
      material && keyword.$and.push({ material: material });
      section && keyword.$and.push({ section: section });
      color && keyword.$and.push({ 'variants.color': color });
      priceFrom && keyword.$and.push({ price: { $gte: priceFrom } });
      priceTo && keyword.$and.push({ price: { $lte: priceTo } });
    }
  } else
  {
    keyword = req.query.keyword
      ? {
        $or: [
          { name: regex },
          { category: regex },
          { code: regex },
          { section: regex },
          { color: regex },
        ],
      }
      : {};
  }

  console.log("key", keyword);

  const count = await Product.countDocuments({ ...keyword, published: true });
  const products = await Product.find({ ...keyword, published: true })
    .populate('category')
    .populate('section')
    .populate('material')
    .populate('variants.color')
    .populate('variants.sizes.size')
    .limit(pageSize)
    .skip(pageSize * (page - 1));
  res.json({ products, page, pages: Math.ceil(count / pageSize) });
})

const getFilters = asyncHandler(async (req, res) => {
  let regex = new RegExp(req.query.keyword, "i");
  let category = req.query.category;
  let material = req.query.material;
  let section = req.query.section;
  let color = req.query.color;
  let price = req.query.price;
  let priceTo;
  let priceFrom;

  if (price)
  {
    if (price.indexOf("to") !== -1)
    {
      priceTo = price.split("to")[1];
      priceFrom = price.split("to")[0];
    } else
    {
      priceFrom = price;
    }
  }

  if (category)
  {
    category = await Category.findOne({ name: { $regex: category } });
    if (category)
    {
      category = category._id;
    }
  }

  if (material)
  {
    material = await Material.findOne({ name: { $regex: material } });
    if (material)
    {
      material = material._id;
    }
  }

  if (section)
  {
    section = await Section.findOne({ name: { $regex: section } });
    if (section)
    {
      section = section._id;
    }
  }

  if (color)
  {
    color = await Color.findOne({ name: { $regex: color } });
    if (color)
    {
      color = color._id;
    }
  }

  let keyword;
  if (category || material || section || priceFrom || priceTo || color)
  {
    if (req.query.keyword)
    {
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
              {
                color: regex,
              },
            ],
          },
        ],
      };
      category && keyword.$and.push({ category: category });
      material && keyword.$and.push({ material: material });
      section && keyword.$and.push({ section: section });
      color && keyword.$and.push({ 'variants.color': color });
      priceFrom && keyword.$and.push({ price: { $gte: priceFrom } });
      priceTo && keyword.$and.push({ price: { $lte: priceTo } });
    } else
    {
      keyword = { $and: [] };
      category && keyword.$and.push({ category: category });
      material && keyword.$and.push({ material: material });
      section && keyword.$and.push({ section: section });
      color && keyword.$and.push({ 'variants.color': color });
      priceFrom && keyword.$and.push({ price: { $gte: priceFrom } });
      priceTo && keyword.$and.push({ price: { $lte: priceTo } });
    }
  } else
  {
    keyword = req.query.keyword
      ? {
        $or: [
          { name: regex },
          { category: regex },
          { code: regex },
          { section: regex },
          { color: regex },
        ],
      }
      : {};
  }

  console.log(keyword);

  const products = await Product.find({ ...keyword })
    .populate('category')
    .populate('section')
    .populate('material')
    .populate('variants.color');

  const filters = {
    filters: {
      categories: [],
      materials: [],
      sections: [],
      colors: [],
      price,
    },
  };
  // filters.filters.categories = products
  //   .map((item) => item.category && item.category.name)
  //   .filter((value, index, self) => value && self.indexOf(value) === index);

  filters.filters.categories = products.reduce((acc, product) => {
    acc = acc || [];
    if (product.category)
    {
      acc.push(product.category.reduce((accumulator, currentValue) => {
        accumulator = accumulator || [];
        accumulator.push(currentValue.name);
        return accumulator
      }, []));
    }
    return acc;
  }, []).flat().filter((value, index, self) => value && self.indexOf(value) === index);

  filters.filters.materials = products.reduce((acc, product) => {
    acc = acc || [];
    if (product.material)
    {
      acc.push(product.material.reduce((accumulator, currentValue) => {
        accumulator = accumulator || [];
        accumulator.push(currentValue.name);
        return accumulator
      }, []));
    }
    return acc;
  }, []).flat().filter((value, index, self) => value && self.indexOf(value) === index);

  filters.filters.colors = products.reduce((acc, product) => {
    acc = acc || [];
    if (product.variants)
    {
      acc.push(product.variants.reduce((accumulator, currentValue) => {
        accumulator = accumulator || [];
        accumulator.push(currentValue.color.name);
        return accumulator
      }, []));
    }
    return acc;
  }, []).flat().filter((value, index, self) => value && self.indexOf(value) === index);

  filters.filters.sections = products.reduce((acc, product) => {
    acc = acc || [];
    if (product.section)
    {
      acc.push(product.section.reduce((accumulator, currentValue) => {
        accumulator = accumulator || [];
        accumulator.push(currentValue.name);
        return accumulator
      }, []));
    }
    return acc;
  }, []).flat().filter((value, index, self) => value && self.indexOf(value) === index);

  res.json(filters);
});

// @desc Fetch single product
// @route GET /api/products/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id)
    .populate('category')
    .populate('section')
    .populate('material')
    .populate('variants.color')
    .populate('variants.sizes.size')
    .populate('related');

  if (product)
  {
    res.json(product);
  } else
  {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc Delete product
// @route DELETE /api/products/:id
// @access Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product)
  {
    await product.remove();
    res.json({ message: "Product removed" });
  } else
  {
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
    image: "/images/logo.png",
    description: "Descripción",
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
    category,
    description,
    material,
    section,
    code,
    leading,
    published,
    price,
    variants,
    related,
  } = req.body;

  const product = await Product.findById(req.params.id);

  if (product)
  {
    product.name = name;
    product.category = category;
    product.description = description;
    product.material = material;
    product.section = section;
    product.code = code;
    product.leading = leading;
    product.published = published;
    product.price = price;
    product.variants = variants;
    product.related = related;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else
  {
    res.status(404);
    throw new Error("Product not found");
  }
});

// @desc Get top Rated Products
// @route get /api/products/top
// @access Public
const getTopProducts = asyncHandler(async (req, res) => {
  // const products = await Product.find({ leading: true, published: true }).sort({ leading: -1 }).limit(9);
  const products = await Product.find({ leading: true, published: true }).sort({ leading: -1 });
  res.json(products);
});

const getRelatedProducts = asyncHandler(async (req, res) => {
  const categories = req.params.id.split(",");
  // const products = await Product.find({
  //   leading: true,
  //   published: true,
  //   category: { $in: categories }
  // }).sort({ leading: -1 }).limit(9);
  const products = await Product.find({
    leading: true,
    published: true,
    category: { $in: categories }
  }).sort({ leading: -1 });
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
  getShopProducts,
  getRelatedProducts,
};
