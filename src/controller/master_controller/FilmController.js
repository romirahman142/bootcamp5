const model = require("./../../model/film.model");
const api = require("./../../tools/common");

// country controller
getFilmById = async (req, res) => {
  if (!isNaN(req.params.id)) {
    let data = await model.getById(req.params.id);
    return api.ok(res, data);
  } else {
    return api.error(res, "bad request", 400);
  }
};

getAllFilm = async (req, res) => {
  let data = await model.getAll();
  return api.ok(res, data);
};

insertFilm = async (req, res) => {
  let data = await model.insert(req.body.form_data);
  return api.ok(res, data);
};

updateFilm = async (req, res) => {
  let data = await model.update(req.params.id, req.body.form_data);
  return api.ok(res, data);
};

module.exports = {
  getFilmById,
  getAllFilm,
  insertFilm,
  updateFilm,
};
