
import e from "express";
import roullet_bet_controller from "../controllers/roullet-bet-controller.js"

const router = e.Router();

router.post("/", roullet_bet_controller.store)
router.get("/", roullet_bet_controller.index)
router.get("/:id", roullet_bet_controller.show)
router.put("/:id", roullet_bet_controller.update)

export default router