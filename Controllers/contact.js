const Contact=require('../Models/Contact')

// Add Contact
exports.addContact=async(req,res)=>{
    const {name,email,age} = req.body
    try {
        const contact=new Contact({
            name,email,age
        })
        await contact.save()
        res.send({msg:'Contact added',contact})
    } catch (error) {
        console.log('Cannot add contact')
    }
}

// Get All Contacts
exports.getAllContacts=async(req,res)=>{
    try {
        const contacts=await Contact.find()
        res.send({msg:"All contacts displayed",contacts})
    } catch (error) {
        res.send('cannot find contacts')
    }
}

// Delete Contact
exports.deleteContact=async(req,res)=>{
    const {contactId}=req.params
    try {
        await Contact.findByIdAndDelete(contactId)
        res.send('Contact deleted')
    } catch (error) {
        res.send('server error')
    }
}

// Update Contact
exports.updateContact=async(req,res)=>{
    const {contactId}=req.params
    try {
        await Contact.findByIdAndUpdate(contactId,{$set:{...req.body}})
        res.send('Contact updated')
    } catch (error) {
        res.send('server error')
    }
}

// Get One Contact
exports.getOneContact=async(req,res)=>{
    const {contactId}=req.params
    try {
        const contact= await Contact.findOne({_id:contactId})
        res.send(contact)
    } catch (error) {
        res.send(error.message)
    }
}