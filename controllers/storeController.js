const db = require("../models/db");

exports.getStores = async (req, res) => {
  const result = await db.query("SELECT * FROM stores");
  res.json(result.rows);
};

exports.rateStore = async (req, res) => {
  const { storeId } = req.params;
  const { rating, comment } = req.body;

  await db.query(
    "INSERT INTO ratings (store_id, rating, comment) VALUES ($1, $2, $3)",
    [storeId, rating, comment]
  );

  res.json({ message: "Rating submitted successfully" });
};
