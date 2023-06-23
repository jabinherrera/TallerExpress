import UserModel from "../models/user.model.js";

async function registerUser(req, res) {
    try {
      const userRegistered = await UserModel.create(req.body);
      res.send(userRegistered);
    } catch (err) {
      res.status(500).send(err);
    }
  }

export {
    registerUser,
};