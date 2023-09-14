const Hall = require('../models/Hall')


const addHall = async (req, res) => {
    const { code, capacity, floor, type } = req.body

    await Hall.create({ code, capacity, floor, type })
        .then((response) => {
            res.json({ status: true, message: 'New hall is added' })
        })
        .catch((err) => {
            res.json({ status: false, message: err.message })

        })
}

const viewAllHalls = async (req, res) => {
    await Hall.find({})
        .then((response) => {
            res.json({ status: true, response })
        })
        .catch((err) => {
            res.json({ status: false, message: err.message })

        })
}

const viewHall = async (req, res) => {
    const hallId = req.params.id;

    await Hall.findById(hallId)
        .then((response) => {
            if (response)
                res.json({ status: true, response })
            else
                res.json({ status: false, message: 'Hall not found' })
        })
        .catch((err) => {
            res.json({ status: false, message: err.message })
        })
}

const updateHall = async (req, res) => {
    const hallId = req.params.id;
    const { code, capacity, floor, type } = req.body

    await Hall.findOneAndUpdate({ _id: hallId }, { code, capacity, floor, type })
        .then((response) => {
            if (response)
                res.json({ status: true, message: 'Hall is updated' })
            else
                res.json({ status: false, message: 'Hall not found' })
        })
        .catch((err) => {
            res.json({ status: false, message: err.message })
        })
}

const removeHall = async (req, res) => {

    const hallId = req.params.id;

    await Hall.findByIdAndDelete({ _id: hallId })
        .then((response) => {
            if (response)
                res.json({ status: true, message: 'Hall is deleted' })
            else
                res.json({ status: false, message: 'Hall not found' })
        })
        .catch((err) => {
            res.json({ status: false, message: err.message })
        })
}


module.exports = { addHall, viewAllHalls, viewHall, updateHall, removeHall }
