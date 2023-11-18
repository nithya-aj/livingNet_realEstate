import express from "express";
import {
  bookVisit,
  cancelBooking,
  createUser,
  getAllBookings,
  getAllFavorites,
  handleFavorites,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/register", createUser);
router.post("/book-visit/:id", bookVisit);
router.post("/all-bookings", getAllBookings);
router.post("/cancel-booking/:id", cancelBooking);
router.post("/favorites/:rid", handleFavorites);
router.post("/all-favorites/:id", getAllFavorites)

export { router as userRoute };
