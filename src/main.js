import "dotenv/config";
import e from "express";
import user_router from "./http/routes/user-route.js";
import roullete_bet_router from "./http/routes/roullete-bet-route.js";
import jackpot_bet_router from "./http/routes/jackpot-bet-route.js";
import competitor_route from "./http/routes/competitor-route.js";
import craps_route_caio from "./http/routes/craps-route-caio.js";
import match_router from "./http/routes/match-route.js";
import match_bet_route from "./http/routes/match-bet-route.js"

const app = e();

app.use(e.json());
app.use("/user", user_router);
app.use("/roullete-bet", roullete_bet_router);
app.use("/jackpot-bet", jackpot_bet_router);
app.use("/competitor", competitor_route);
app.use("/craps-caio",craps_route_caio);
app.use("/match", match_router);
app.use("/match-bet", match_bet_route);

app.listen(process.env.API_PORT, () => {
  console.log("Aplicação rodando");
});