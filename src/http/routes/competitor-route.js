import e from "express";
import competidor_controller from "../controllers/competidor-controller.js"

const router = e.Router();

router.post("/", competidor_controller.store)
router.get("/", competidor_controller.index)
router.get("/:id", competidor_controller.show)
router.put("/:id", competidor_controller.update)
router.delete("/:id", competidor_controller.destroy)

export default router