const express=require('express')
const router=express.Router()
const {addContact, getAllContacts, deleteContact, updateContact, getOneContact} = require('../Controllers/contact')

// method get
// url /:contactId
// req.params
router.get('/:contactId', getOneContact)

// method get
// url /
router.get('/',getAllContacts)

// method post
// url /
// req.body
router.post('/',addContact)

// method delete
// url /:contactId
// req.params
router.delete('/:contactId', deleteContact)

// method put
// url /:contactId
// req.params
// req.body
router.put('/:contactId', updateContact)

module.exports=router