const router = require('express-promise-router')();
const HamburgerController = require("../controllers/HamburgerController");

router.get("/hamburger", HamburgerController.index);

router.post("/hamburger", HamburgerController.store);

module.exports = router;