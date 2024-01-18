const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  addUserInterest,
  registerUserForEvent,
  userRegisteredEvents,
  deleteUser
} = require("../controllers/userControllers");

router.route("/signup").post(signup);
router.route("/login").post(login);
router.route("/addInterest/:userId").put(addUserInterest);
router.route("/registerEvent/:userId").post(registerUserForEvent);
router.route("/deleteUser/:userId").delete(deleteUser);
router.route("/userRegisteredEvents/:userId").get(userRegisteredEvents);

module.exports = router;
