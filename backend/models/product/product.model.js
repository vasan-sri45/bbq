import mongoose from "mongoose";

const optionItemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      default: 0, // for add-ons like drinks
    },

    default: {
      type: Boolean,
      default: false,
    },
  },
  { _id: false }
);

const optionSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    type: {
      type: String,
      enum: ["single", "multiple"],
      required: true,
    },

    required: {
      type: Boolean,
      default: false,
    },

    description: String,

    min: {
      type: Number,
      default: 0,
    },

    max: {
      type: Number,
      default: null, // unlimited unless specified
    },

    items: [optionItemSchema],
  },
  { _id: false }
);

const productSchema = new mongoose.Schema(
  {
    variety: {
      type: String, // kebabs, burgers, pizza, etc.
    },

    name: {
      type: String,
      required: true,
    },

    description: String,

    badge: {
      type: String, // Popular, New, etc.
    },

    basePrice: {
      type: Number,
      default: 0,
    },

    price: {
      type: Number,
      default: 0,
    },

    currency: {
      type: String,
      default: "GBP",
    },

    options: [optionSchema],

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);