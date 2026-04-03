import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },

    name: String,

    quantity: {
      type: Number,
      default: 1,
    },

    basePrice: Number,

    // ✅ Your current structure (array-based options)
    options: {
      type: Array, // ["Large", [...], "Sauce", [...]]
      default: [],
    },

    totalPrice: Number,
  },
  { _id: false }
);

const cartSchema = new mongoose.Schema(
  {
    guestId: {
      type: String,
      required: true,
    },

    items: [cartItemSchema],

    totalAmount: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Cart", cartSchema);