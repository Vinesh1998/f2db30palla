var express = require('express');
var router = express.Router();
const juice_controllers= require('../controllers/juice');

/* GET home page. */
router.get('/',juice_controllers.juice_view_all_Page);


/* GET detail juice page */ 
router.get('/detail', juice_controllers.juice_view_one_Page); 

/* GET create juice page */ 
router.get('/create', juice_controllers.juice_create_Page);

/* GET create update page */ 
router.get('/update', juice_controllers.juice_update_Page); 

/* GET delete juice page */ 
router.get('/delete', juice_controllers.juice_delete_Page); 


module.exports = router;