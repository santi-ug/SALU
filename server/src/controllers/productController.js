import slugify from "slugify";
import { validateIDinDB } from "../../utils/validateIDinDB.js";
import Product from "../models/product.js";

// Create a Product
export const createProduct = async (req, res) => {
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title);
        }
        const newProduct = await Product.create(req.body);
        res.json(newProduct);
    } catch (error) {
        return res.json(error);
    }
}

// Get all products
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.json(products);
    } catch (error) {
        return res.json(error)
    }
}

// Get a product
export const getProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        res.json(product);
    } catch (error) {
        return res.json(error)
    }
}

// Update a product
export const updateProduct = async (req, res) => {
    const {id} = req.params;
    validateIDinDB(id);
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title);
        }
        const updatedProduct = await Product.findByIdAndUpdate( id , req.body, {new: true});

        res.json(updatedProduct);
    } catch (error) {
        return res.json(error);
    }
}

// Delete a product
export const deleteProduct = async (req, res) => {
    const {_id} = req.params;
    validateIDinDB(_id);
    try {
        const deletedProduct = await Product.findOneAndDelete(_id);
        res.json(deletedProduct);
    } catch (error) {
        console.log(error)
    }
}
