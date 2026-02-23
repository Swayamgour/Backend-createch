import express from "express";
import {
  createTeamMember,
  getTeamMembers,
  deleteTeamMember,
  
} from "../controller/teamController.js";

import multer from "multer";

const router = express.Router();

// 🔹 Multer Setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Routes
router.post("/", upload.single("image"), createTeamMember);
router.get("/", getTeamMembers);
router.delete("/:id", deleteTeamMember);

export default router;