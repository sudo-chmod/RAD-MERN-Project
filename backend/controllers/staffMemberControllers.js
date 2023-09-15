const Staff = require("../models/Staff");


const add_Staff = async (req, res) => {
    const {firstName, lastName, category, gender, mobile, NIC, civilStatus, type, address, salary } = req.body
    
    const temp = await Staff.find({}).sort({ stfId: -1 }).limit(1)
    if (temp.length > 0) {
        stfId = temp[ 0 ].stfId + 1
    } else {
        stfId = 50001
    }

    const new_member = new Staff({ stfId, firstName, lastName, category, gender, mobile, NIC, civilStatus, type, address, salary })

    await new_member.save().then(() => {
        res.json({ status: true, message: 'New staff member is added' })
    }).catch((err) => {
        res.json({ status: false, message: err.message })
    })
}

const display_Staff = async (req, res) => {
    await Staff.find().then((response) => {
        res.json({ status: true, response })
    }).catch((err) => {
        res.json({ status: false, message: err.message })
    })
}

const update_Staff = async (req, res) => {
    const User_Id = req.params.id
    const { firstName, lastName, category, gender, mobile, NIC, civilStatus, type, address, salary } = req.body
    const update_Staff_data = { firstName, lastName, category, gender, mobile, NIC, civilStatus, type, address, salary }

    await Staff.findByIdAndUpdate(User_Id, update_Staff_data).then(() => {
        res.json({ status: true, message: "Staff member is updated" })
    }).catch((err) => {
        res.json({ status: false, message: err.message })
    })
}

const delete_Staff = async (req, res) => {
    const User_Id = req.params.id

    await Staff.findByIdAndDelete(User_Id).then(() => {
        res.json({ status: true, message: "Staff member is deleted" })
    }).catch((err) => {
        res.json({ status: false, message: err.message })
    })
}

const fetch_Staff = async (req, res) => {
    const User_Id = req.params.id
    await Staff.findById(User_Id).then((response) => {
        res.json({ status: true, response })
    }).catch((err) => {
        res.json({ status: false, message: err.message })
    })
}

module.exports = { add_Staff, display_Staff, update_Staff, delete_Staff, fetch_Staff }
