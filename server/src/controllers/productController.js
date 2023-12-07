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
        // Filtering
        const queryObj = {...req.query};
        const excludedFields = ['page', 'sort', 'limit', 'fields'];
        excludedFields.forEach(el => delete queryObj[el]);
        let queryStr = JSON.stringify(queryObj);
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, match => `$${match}`);

        let query = Product.find(JSON.parse(queryStr));

        // Sorting
        if (req.query.sort) {
            const sortBy = req.query.sort.split(",").join(" ");
            query = query.sort(sortBy);
        } else {
            query = query.sort("-createdAt");
        }

        // Limiting the fields
        if (req.query.fields) {
            const fields = req.query.fields.split(",").join(" ");
            query = query.select(fields);
        } else {
            query = query.select("-__v");
        }

        // Pagination
        const page = req.query.page;
        const limit = req.query.limi;
        const skip = (page - 1) * limit;
        query = query.skip(skip).limit(limit);
        if (req.query.page) {
            const productCount = await Product.countDocuments();
            if (skip >= productCount) res.json("This page doesnt exist");
        }

        const product = await query;

        res.json(product);
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
