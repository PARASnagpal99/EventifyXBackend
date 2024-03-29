const express = require("express");
const router = express.Router();
const {
  signup,
  login,
  addUserInterest,
  registerUserForEvent,
  userRegisteredEvents,
  deleteUser ,
  getUserInterests,
  removeUserInterest,
  unregisterUserForEvent,
  getUserFriends,
  changePassword,
  getUserRegistrationEventID,
  addFriend,
  getUserFriendNames
} = require("../controllers/userControllers");
const {protect} = require('../middlewares/authMiddleware');


router.route("/signup").post(signup);
router.route("/login").post(login);

router.route("/addInterest/:userId").put(protect,addUserInterest);
router.route("/removeInterest/:userId").put(protect,removeUserInterest);
router.route("/userInterest/:userId").get(protect,getUserInterests);
router.route("/registerEvent/:userId").post(protect,registerUserForEvent);
router.route("/deleteUser/:userId").delete(protect,deleteUser);
router.route("/userRegisteredEvents/:userId").get(protect,userRegisteredEvents);
router.route("/cancelUserRegistration/:userId").delete(protect,unregisterUserForEvent);
router.route("/userInterest/:userId").get(protect,getUserInterests);
router.route("/getUserFriends/:userId").get(protect,getUserFriends);
router.route("/changePassword/:userId").put(protect,changePassword);
router.route("/getEventIdofUser/:userId").get(protect,getUserRegistrationEventID);
router.route("/addFriend/:userId").post(protect,addFriend);
router.route("/getUserFriendsName/:userId").get(protect,getUserFriendNames)


module.exports = router;