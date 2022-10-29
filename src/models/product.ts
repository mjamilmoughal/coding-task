import mongoose from "mongoose";

import { Model } from "mongoose";

type ProductType = ProductModel & mongoose.Document;

export interface ProductModel {
  productTitle: {
    type: String;
    required: true;
  };
  description: {
    type: String;
    required: true;
  };
  picture: {
    type: String;
    required: true;
  };
  price: {
    type: Number;
    required: true;
  };
  quantity: {
    type: Number;
    required: false;
  };
}

const ProductSchema = new mongoose.Schema({
  productTitle: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: false,
  },
});

const Product: Model<ProductType> = mongoose.model<ProductType>(
  "Product",
  ProductSchema
);

export default Product;
