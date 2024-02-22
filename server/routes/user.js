import express from "express";
import User from "../model/user.js";

const router = express.Router();

router.post("/create", async (req, res) => {
  console.log(req.body);
  try {
    const storeEmployee = await User.create(req.body);
    res.status(200).json({
      data: storeEmployee,
    });
    console.log(storeEmployee);
  } catch (error) {
  console.log(error)
  }
});

export default router;
