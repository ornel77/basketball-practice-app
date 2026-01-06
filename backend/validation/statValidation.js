export const statValidator = (req, res, next) => {
  const { fieldAvg, threeAvg, ll, lr, ft } = req.body;

  if (
    fieldAvg == null ||
    threeAvg == null ||
    ll == null ||
    lr == null ||
    ft == null
  ) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all fields" });
  }

  next();
};
