const model = require("./../../model/language.model");
const api = require("./../../tools/common");

// language controller
getLanguageById = async (req, res) => {
  if (!isNaN(req.params.id)) {
    let data = await model.getById(req.params.id);
    return api.ok(res, data);
  } else {
    return api.error(res, "bad request", 400);
  }
};

getAllLanguage = async (req, res) => {
  let data = await model.getAll();
  return api.ok(res, data);
};

insertLanguage = async (req, res) => {
  let data = await model.insert(req.body.form_data);
  return api.ok(res, data);
};

updateLanguage = async (req, res) => {
  let data = await model.update(req.params.id, req.body.form_data);
  return api.ok(res, data);
};

module.exports = {
  getLanguageById,
  getAllLanguage,
  insertLanguage,
  updateLanguage,
};