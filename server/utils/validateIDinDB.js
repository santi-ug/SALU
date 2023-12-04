import mongoose from "mongoose";

export const validateIDinDB = async (id) => {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    return isValid;
}