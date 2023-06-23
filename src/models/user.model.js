import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        last_name: {
            type: String,
            requiered: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        }
    }
);

const UserModel = mongoose.model('User', userSchema);

export default UserModel;