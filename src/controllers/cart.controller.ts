import { RequestHandler } from "express";
import Cart from "../models/cart";
import { CartModel } from "../models/cart";
import Product from "../models/product";

export const addNewCart: RequestHandler = async (req, res, next) => {
  try {
    const data: CartModel = req.body;

    if (!(data.isActive || data.products || data.userId)) {
      res.status(400).send("Please enter all required fields");
    }

    var cart = await Cart.create(data);
    res.status(201).send({ cart: cart });
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getUserCart: RequestHandler = async (req, res, next) => {
  try {
    var carts = await Cart.find({ userId: req.query.userId });
    res.status(200).send({ list: carts });
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getAllCarts: RequestHandler = async (req, res, next) => {
  try {
    let carts = await Cart.find({});
    res.status(200).send({ list: carts });
  } catch (error) {
    res.status(400).send(error);
  }
};
