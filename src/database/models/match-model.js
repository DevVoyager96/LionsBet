import conn from "../conn.js";

const Schema = conn.Schema;

const MatchModel = new Schema({
  competitors: {
    a: {
      type: Schema.Types.ObjectId,
      ref: "Competitor",
      required: true,
    },
    b: {
      type: Schema.Types.ObjectId,
      ref: "Competitor",
      required: true,
    },
  },
  start: {
    type: Schema.Types.Date,
  },
});

const Match_Model = conn.model("Match", MatchModel);

export default Match_Model;
