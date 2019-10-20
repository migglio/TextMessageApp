exports.get_text = function(req, res) {
  console.log(req.query.message);
  res.json({ message: req.query.message });
};
