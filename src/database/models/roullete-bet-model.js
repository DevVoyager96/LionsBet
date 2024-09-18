import conn from "../conn.js";
import betSchema from "../bet-schema.js";

const Schema = conn.Schema;

const roulletBetSchema = new Schema({
  bet: betSchema,
  betNumber: {
    type: Schema.Types.BigInt,
    require: true, 
    min: 1,
    max: 100
  },
  drawnNumber: {
    type: Schema.Types.BigInt,
    require: true, 
    min: 1,
    max: 100
  },
})

const roulleteBetSchema

 