import UserModel from "../models/user.model.js";

async function registerUser(req, res) {
    try {
      const userRegistered = await UserModel.create(req.body);
      res.send(userRegistered);
    } catch (err) {
      if ( req.body.name == null || 
            req.body.last_name == null || 
            req.body.email == null || 
            req.body.password == null) {
        res.status(400).send("Falta campo requerido")
      } else {
        res.status(500).send(err);
      }
    }

  }

export {
    registerUser,
};