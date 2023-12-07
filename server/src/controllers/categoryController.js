import { validateIDinDB } from "../../utils/validateIDinDB.js";
import Category from "../models/category.js";

// Create a category
export const createCategory = async (req, res) => {
    try {
        const newCategory = await Category.create(req.body);
        res.json(newCategory);
    } catch (error) {
        return res.json(error)
    }
};

// Get a category
export const getCategory = async (req, res) => {
    const { id } = req.params;
    validateIDinDB(id);
    try {
        const category = await Category.findById(id);
        res.json(category);
    } catch (error) {
        return res.json(error)
    }
};

// Get all categories
export const getAllCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        return res.json(error)
    }
};

// Update a category
export const updateCategory = async (req, res) => {
    const { id } = req.params;
    validateIDinDB(id);
    try {
        const newCategory = await Category.findByIdAndUpdate(id, req.body, {new: true});
        res.json(newCategory);
    } catch (error) {
        return res.json(error)
    }
};

// Delete a category
export const deleteCategory = async (req, res) => {
    const { id } = req.params;
    validateIDinDB(id);
    try {
        const deletedCategory = await Category.findByIdAndDelete(id);
        res.json(deletedCategory);
    } catch (error) {
        return res.json(error)
    }
}