import match_bet from "../../database/models/match-bet-model.js";

const store = () => {
  try {
    match_bet.create(req.body);
    res.json();
  } catch (error) {
    res.status(400).json(error);
  }
};

const index = async (req, res) => {
    try {
        const content = await match_bet.find(req.query).exec()
        res.json(content);
    } catch (error) {
        res.status(400).json(error);
    }
}

const show = async (req, res) => {
    try {
        const content = await match_bet.find(req.query).exec()
        res.json(content);
    } catch (error) {
        res.status(400).json(error);
    }
}

const destroy = async (req, res) => {
    try {
        const content = await match_bet.find(req.query).exec()
        res.json(content);
    } catch (error) {
        res.status(400).json(error);
    }
}

const update = async (req, res) => {
    try {
        const content = await match_bet.find(req.query).exec()
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
    destroy
}