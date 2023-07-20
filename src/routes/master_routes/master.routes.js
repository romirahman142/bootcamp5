var express = require("express");
var router = express.Router();

const FilmController = require("./../../controller/master_controller/FilmController");
const ActorController = require("./../../controller/master_controller/ActorController");
const CategoryController = require("./../../controller/master_controller/CategoryController");
const AddressController = require("./../../controller/master_controller/AddressController");
const CountryController = require("./../../controller/master_controller/CountryController");
const InventoryController = require("./../../controller/master_controller/InventoryController");
const LanguageController = require("./../../controller/master_controller/LanguageController");
const StaffController = require("./../../controller/master_controller/StaffController");

// film data
router.get("/film", FilmController.getAllFilm);
router.get("/film/:id", FilmController.getFilmById);
router.post("/film", FilmController.insertFilm);
router.put("/film/:id", FilmController.updateFilm);

// actor data
router.get("/actor", ActorController.getAllActor);
router.get("/actor/:id", ActorController.getActorById);
router.post("/actor", ActorController.insertActor);
router.put("/actor/:id", ActorController.updateActor);

// Address data
router.get("/address", AddressController.getAllAddress);
router.get("/address/:id", AddressController.getAddressById);
router.post("/address", AddressController.insertAddress);
router.put("/address/:id", AddressController.updateAddress);

// Category data
router.get("/category", CategoryController.getAllCategory);
router.get("/category/:id", CategoryController.getCategoryById);
router.post("/category", CategoryController.insertCategory);
router.put("/category/:id", CategoryController.updateCategory);

// Country data
router.get("/country", CountryController.getAllCountry);
router.get("/country/:id", CountryController.getCountryById);
router.post("/country", CountryController.insertCountry);
router.put("/country/:id", CountryController.updateCountry);

// Inventory data
router.get("/inventory", InventoryController.getAllInventory);
router.get("/inventory/:id", InventoryController.getInventoryById);
router.post("/inventory", InventoryController.insertInventory);
router.put("/inventory/:id", InventoryController.updateInventory);

// Language data
router.get("/language", LanguageController.getAllLanguage);
router.get("/language/:id", LanguageController.getLanguageById);
router.post("/language", LanguageController.insertLanguage);
router.put("/language/:id", LanguageController.updateLanguage);

// Staff data
router.get("/staff", StaffController.getAllStaff);
router.get("/staff/:id", StaffController.getStaffId);
router.post("/staff", StaffController.insertStaff);
router.put("/staff/:id", StaffController.updateStaff);

module.exports = router;
