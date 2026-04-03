import Product from "../../models/product/product.model.js";

const normalizeItems = (options) => {
  return options.map((opt) => ({
    ...opt,
    items: opt.items.map((item) =>
      typeof item === "string"
        ? { name: item } // convert string → object
        : item
    ),
  }));
};

// ✅ CREATE PRODUCT
export const createProduct = async (req, res) => {
  try {
    const data = req.body;

    if (data.options) {
      data.options = normalizeItems(data.options);
    }

    const product = await Product.create(data);

    res.status(201).json({
      success: true,
      data: product,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating product" });
  }
};


// ✅ GET ALL PRODUCTS
export const getAllProducts = async (req, res) => {
  try {
    const { variety } = req.query;

    const filter = {};
    if (variety) filter.variety = variety;

    const products = await Product.find(filter).sort({ createdAt: -1 });

    res.json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (err) {
    console.error("Get Products Error:", err);
    res.status(500).json({
      success: false,
      message: "Failed to fetch products",
    });
  }
};


// ✅ GET SINGLE PRODUCT
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.json({
      success: true,
      data: product,
    });
  } catch (err) {
    console.error("Get Product Error:", err);
    res.status(500).json({
      success: false,
      message: "Failed to fetch product",
    });
  }
};


// ✅ UPDATE PRODUCT
export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.json({
      success: true,
      message: "Product updated successfully",
      data: product,
    });
  } catch (err) {
    console.error("Update Product Error:", err);
    res.status(500).json({
      success: false,
      message: "Failed to update product",
    });
  }
};


// ✅ DELETE PRODUCT
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (err) {
    console.error("Delete Product Error:", err);
    res.status(500).json({
      success: false,
      message: "Failed to delete product",
    });
  }
};