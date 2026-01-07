import validator from "validator";

export const authValidator = (req, res, next) => {
  const { firstname, lastname, email, password } = req.body;

  if (!firstname || !lastname || !email || !password) {
    return res.status(400).json({success: false, message: "All fields are required" });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({success: false, message: "Invalid Email" });
  }

  if (
    !validator.isLength(password, {
      min: 6,
    })
  ) {
    return res.status(400).json({success: false, message: "The password must have at least 6 characters" });
  }

  next()
};
