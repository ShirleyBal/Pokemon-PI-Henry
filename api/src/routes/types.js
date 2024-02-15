const { Router } = require('express');
const router =Router()
const {getTypesHandler}=require('../Handlers')
router.get('/',getTypesHandler)
module.exports = router;