import conn from "../conn.js";

const Schema = conn.Schema;

const Competidor_Model = new Schema({
  name: {
    type: [Schema.Types.String],
    required: true,
  },
});

const CompetidorModel = conn.model("Competidor", Competidor_Model);

export default CompetidorModel;