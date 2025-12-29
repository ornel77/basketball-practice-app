import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";


export const protectRoute = async (req, res, next) => {
  try {
    // check if there is a token or not
    // we write jwt cause thats how we called our token
    const token = req.cookies.token; //to grab this token we need cookie parser
    console.log("protect",token)

    if (!token) {
      return res
        .status(401)
        .json({ message: "Unauthorized - No token provided" });
    }
    // else we decode it to grab the user id that we put in the payload by verifing the token withe secret

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized - Invalid Token" });
    }

    // if its ok we search the user in the db
    const user = await User.findById(decoded.userId).select("-password ");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // add this user field in the request since is authentificated
    req.user = user;
    // console.log(req.user)

    next();
  } catch (error) {
    console.log("error in protectRoute middleware", error.message);
    res.status(500).json({ message: "internal server error" });
  }
};
