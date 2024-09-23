import conn from "../conn.js";
import betSchema from "../bet-schema.js";
import MatchBet from "../match-bet-model.js";

const Schema = conn.Schema;

const MatchBet = new Schema({
  odd: {
    type: Schema.Types.Number,
    required: true,
  },
  match: {
    type: Schema.Types.ObjectId,
    ref: "Match",
    required: true,
  },
  competitor: {
    type: Schema.Types.ObjectId,
    ref: "Competitor",
    required: true,
  },
  bet: betSchema,
});

const Match_Bet = conn.model("MatchBet", MatchBet);

export default Match_Bet;
