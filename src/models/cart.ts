import mongoose from "mongoose";
import { Model } from "mongoose";
import { ProductModel } from "./product";

type CartType = CartModel & mongoose.Document;

export interface CartModel {
  userId: {
    type: String;
    required: true;
  };
  products: [
    {
      productTitle: String;
      description: String;
      picture: String;
      price: Number;
      quantity: Number;
      productId: String;
    }
  ];
  isActive: {
    type: Boolean;
    required: true;
  };
  createdOn: {
    type: Date;
    required: false;
  };
  modifiedOn: {
    type: Date;
    required: false;
  };
}

const ProductSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    products: [
      {
        productTitle: String,
        description: String,
        picture: String,
        price: Number,
        quantity: Number,
        productId: String,
      },
    ],
    isActive: {
      type: Boolean,
      required: true,
    },
    createdOn: {
      type: Date,
      required: false,
      default: Date.now,
    },
    modifiedOn: {
      type: Date,
      required: false,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Cart: Model<CartType> = mongoose.model<CartType>("Cart", ProductSchema);

export default Cart;
