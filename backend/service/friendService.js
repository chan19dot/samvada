const getName = async (req, res, next) => {
  console.log("getName called");
  res.status(200).json({
    name: "sri",
  });
};

module.exports = {
  getName,
};
