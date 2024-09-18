import roullete_bet from "../../database/models/roullete-bet-model.js";

const store = async (req, res) => {
  try {
    req.body.drawnNumber = Math.ceil(Math.random() * 100)

    req.body.drawnNumber == parseInt(req.body.betNumber);
    ? (req.body.bet.status = "WON")
    : (req.body.bet.status = "LOST")

    await roullete_bet.create(req.body);
    res.json();
  } catch (error) {
    res.status(400).json(error);
  }
};

const index = async (req, res) => {
    try {
        const content = await roullete_bet.find(req.query).exec()
        res.json(content);
    } catch (error) {
        res.status(400).json(error);
    }
}

const show = async (req, res) => {
    try {
        const content = await roullete_bet.find(req.query).exec()
        res.json(content);
    } catch (error) {
        res.status(400).json(error);
    }
}

const update = async (req, res) => {
    try {
        const content = await roullete_bet.find(req.query).exec()
        res.json(content);
    } catch (error) {
        res.status(400).json(error);
    }
}

export default {
    store,
    index,
    show,
    update,

}
