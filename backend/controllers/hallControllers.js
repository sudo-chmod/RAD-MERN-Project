const Hall = require(`../models/Hall`)


const addHall = async (req, res) => {

    const { code, capacity, floor, type } = req.body

    await Hall.create({ code, capacity, floor, type })
        .then((response) => {
            res.status(200).json({ Success: `Hall ${ response.code } is added!` })
        })
        .catch((err) => {
            res.status(500).json({ Eror: err.message })
        })
}

const viewAllHalls = async (req, res) => {

    await Hall.find({})
        .then((response) => {
            res.status(200).json(response)
        })
        .catch((err) => {
            res.status(500).json({ Eror: err.message })
        })
}

const viewHall = async (req, res) => {

    const hallId = req.params.id;

    await Hall.findById(hallId)
        .then((response) => {
            if (response)
                res.status(200).json(response)
            else
                res.status(404).json({ Eror: 'Hall Not Found!' })
        })
        .catch((err) => {
            res.status(500).json({ Eror: err.message })
        })
}

const updateHall = async (req, res) => {

    const hallId = req.params.id;

    const { code, capacity, floor, type } = req.body

    await Hall.findOneAndUpdate({ _id: hallId }, { code, capacity, floor, type })
        .then((response) => {
            if (response)
                res.status(200).json({ Success: `Hall ${ response.code } is updated!` })
            else
                res.status(404).json({ Eror: 'Hall Not Found!' })
        })
        .catch((err) => {
            res.status(500).json({ Eror: err.message })
        })
}

const removeHall = async (req, res) => {

    const hallId = req.params.id;

    await Hall.findByIdAndDelete({ _id: hallId })
        .then((response) => {
            if (response)
                res.status(200).json({ Success: `Hall ${ response.code } is deleted!` })
            else
                res.status(404).json({ Eror: 'Hall Not Found!' })
        })
        .catch((err) => {
            res.status(500).json({ Eror: err.message })
        })
}


module.exports = {
    addHall,
    viewAllHalls,
    viewHall,
    updateHall,
    removeHall
}
