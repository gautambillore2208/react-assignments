const express = require("express");
const router = express.Router();
const storeController = require("../controllers/storeController");

router.get("/", storeController.getStores);
router.post("/:storeId/rate", storeController.rateStore);

module.exports = router;
