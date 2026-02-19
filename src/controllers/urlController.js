const generateShortId = require("../utils/generateId");
const { saveUrl, getUrl } = require("../models/urlModel");

// Create short URL
const shortenUrl = (req, res) => {
  const { url } = req.body;

  if (!url) {
    return res.status(400).json({
      error: "URL is required"
    });
  }

  const shortId = generateShortId();

  saveUrl(shortId, url);

  res.json({
    shortUrl: `http://localhost:3000/${shortId}`
  });
};

// Redirect user
const redirectUrl = (req, res) => {
  const shortId = req.params.id;

  const originalUrl = getUrl(shortId);

  if (!originalUrl) {
    return res.status(404).send("URL not found");
  }

  res.redirect(originalUrl);
};

module.exports = {
  shortenUrl,
  redirectUrl
};
