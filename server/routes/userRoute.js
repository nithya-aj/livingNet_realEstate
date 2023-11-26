import express from "express";
import {
  bookVisit,
  cancelBooking,
  createUser,
  getAllBookings,
  getAllFavorites,
  handleFavorites,
} from "../controllers/userController.js";
import jwtCheck from "../config/auth0Config.js";

const router = express.Router();

router.post("/register", jwtCheck, createUser);
router.post("/book-visit/:id", bookVisit);
router.post("/all-bookings", getAllBookings);
router.post("/cancel-booking/:id", cancelBooking);
router.post("/favorites/:rid", handleFavorites);
router.post("/all-favorites/:id", getAllFavorites)

export { router as userRoute };
