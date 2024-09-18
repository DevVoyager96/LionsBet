import conn from "./conn.js"

const Schema = conn.Schema;

const betSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    value: {
        type: Schema.Types.Number,
        required: true,
        min: 1 
    },
    value: {
        type: Schema.Types.Number,
        required: true,
        min: 1 

})

export default betSchema