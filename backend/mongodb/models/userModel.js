import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    gender: {type: String, required: true},
});

const userModelSchema = mongoose.model('userModel', userModel);

export default userModelSchema;