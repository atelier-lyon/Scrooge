const express = require("express");
const productsController = require("../../controllers/productsControllers");

const router = express.Router();

router.get('/', (req, res) => {
    productsController.getProducts().then(data => res.json(data));
});
module.exports = router;