// In-memory database
const urlDB = {};

// Save URL
const saveUrl = (shortId, originalUrl) => {
  urlDB[shortId] = originalUrl;
};

// Get URL
const getUrl = (shortId) => {
  return urlDB[shortId];
};

module.exports = {
  saveUrl,
  getUrl
};
