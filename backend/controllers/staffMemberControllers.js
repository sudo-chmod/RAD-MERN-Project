let staff_member = require("../models/StaffMember")

const add_staff_member = async (req, res) => {
    const {name, age, type, salary, NIC, address} = req.body

    const new_member = new staff_member({
        name,
        age,
        type,
        salary,
        NIC,
        address
    })

    await new_member.save().then(() => {
        res.status(200).json({"staff member": "added", "staff memebr": new_member })
    }).catch((err) => {
        console.log(err)
    })
}

const display_staff_member = async (req, res) => {
    await staff_member.find().then((staff_member) => {
        res.status(200).json(staff_member)
    }).catch((err) => {
        console.log(err)
    })
}

const update_staff_member = async (req, res) => {
    const User_Id = req.params.Id

    const {name, age, type, salary, NIC, address} = req.body
    const update_staff_member_data = {
        name,
        age,
        type,
        salary,
        NIC,
        address
    }

    const update = await staff_member.findByIdAndUpdate(User_Id, update_staff_member_data).then(() => {
        res.status(200).send({ "staff member": "updated", "user": update_staff_member_data})
    }).catch((err) => {
        console.log(err)
        res.status(500).send({"staff member": "Update was not successful"})
    })

}


const delete_staff_member = async (req, res) => {
    const User_Id = req.params.Id

    await staff_member.findByIdAndDelete(User_Id).then(() => {
        res.status(200).send({"staff member": "deleted"})
    }).catch((err) => {
        console.log(err)
        res.status(500).send({"staff member": "delete was not successfull"})
    })
}

const fetch_staff_member = async (req, res) => {
    const User_Id = req.params.Id
    const data = await staff_member.findById(User_Id).then((details) => {
        res.status(200).send({"staff member": "fetched", "data": details})
    }).catch((err) => {
        console.log(err)
        res.status(500).send({"staff member": "fetch was not successfull"})
    })
}

module.exports = {
    add_staff_member,
    display_staff_member,
    update_staff_member,
    delete_staff_member,
    fetch_staff_member
    
}
