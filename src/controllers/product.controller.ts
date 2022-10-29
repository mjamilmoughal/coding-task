import { RequestHandler } from "express";

import Product, { ProductModel } from "../models/product";

export const addNewProduct: RequestHandler = async (req, res, next) => {
  try {
    const data: ProductModel = req.body;

    if (
      !(
        data.description ||
        data.picture ||
        data.price ||
        data.productTitle ||
        data.quantity
      )
    ) {
      res.sendStatus(400).send("Please enter required fields");
    }

    var produt = await Product.create(data);
    res.sendStatus(201).send({ product: produt });
  } catch (error) {
    res.sendStatus(400).send(error);
  }
};

export const getAllProducts: RequestHandler = async (req, res, next) => {
  try {
    const { productTitle, description, sortOrder } = req.query;

    let queryObj = {};

    if (productTitle && description) {
      console.log("both");
      queryObj = { productTitle: productTitle, description: description };
    }
    if (productTitle && !description) {
      console.log("title only");
    }
    if (!productTitle && description) {
      console.log("desc only");
    }

    let sortObj = {};
    if (sortOrder) {
      let _sortOrder = sortOrder == "asc" ? 1 : -1;
      sortObj = { price: _sortOrder };
    }
    const products = await Product.find(queryObj).sort(sortObj);
    res.status(200).send({ list: products });
  } catch (error) {
    res.status(400).send(error);
  }
};
