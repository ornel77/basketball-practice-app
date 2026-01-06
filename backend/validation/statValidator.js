

export const statValidator = (req, res, next) => {
  const { fieldAvg, threeAvg, ll, lr, ft, comment } = req.body;

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

  if(comment.length >= 100) {
    return res.status(400).json({success: false, message: "Your comment should have 100 characters maximum"})
  }

  next();
};
