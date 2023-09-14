let staff_member = require("../models/StaffMember")

const add_staff_member = async (req, res) => {
    const { stfId, firstName, lastName, category, gender, mobile, NIC, civilStatus, type, address, salary } = req.body
    const new_member = new staff_member({ stfId, firstName, lastName, category, gender, mobile, NIC, civilStatus, type, address, salary })

    await new_member.save().then(() => {
        res.json({ status: true, message: 'New staff member is added' })
    }).catch((err) => {
        res.json({ status: false, message: err.message })
    })
}

const display_staff_member = async (req, res) => {
    await staff_member.find().then((response) => {
        res.json({ status: true, response })
    }).catch((err) => {
        res.json({ status: false, message: err.message })
    })
}

const update_staff_member = async (req, res) => {
    const User_Id = req.params.Id
    const { stfId, firstName, lastName, category, gender, mobile, NIC, civilStatus, type, address, salary } = req.body
    const update_staff_member_data = { stfId, firstName, lastName, category, gender, mobile, NIC, civilStatus, type, address, salary }

    await staff_member.findByIdAndUpdate(User_Id, update_staff_member_data).then(() => {
        res.json({ status: true, message: "Staff member is updated" })
    }).catch((err) => {
        res.json({ status: false, message: err.message })
    })
}

const delete_staff_member = async (req, res) => {
    const User_Id = req.params.Id

    await staff_member.findByIdAndDelete(User_Id).then(() => {
        res.json({ status: true, message: "Staff member is deleted" })
    }).catch((err) => {
        res.json({ status: false, message: err.message })
    })
}

const fetch_staff_member = async (req, res) => {
    const User_Id = req.params.Id
    await staff_member.findById(User_Id).then((response) => {
        res.json({ status: true, response })
    }).catch((err) => {
        res.json({ status: false, message: err.message })
    })
}

module.exports = { add_staff_member, display_staff_member, update_staff_member, delete_staff_member, fetch_staff_member }
