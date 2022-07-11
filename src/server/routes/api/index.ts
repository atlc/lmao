import * as express from "express";
import adminRoutes from "./admin";
import blogRoutes from "./blogs";
import { isAdmin, isUser } from "../../middlewarez";

const router = express.Router();

router.use("/admin", isAdmin, adminRoutes);
router.use("/blogs", blogRoutes);

export default router;
