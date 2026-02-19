const express = require("express");
const router = express.Router();
const {
  shortenUrl,
  redirectUrl
} = require("../controllers/urlController");

// Create short URL
router.post("/shorten", shortenUrl);

// Redirect
router.get("/:id", redirectUrl);

module.exports = router;
