var express = require('express');
var router = express.Router();
const juice_controllers= require('../controllers/juice');
// A little function to check if we have an authorized user and continue on 

// redirect to login. 
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

/* GET home page. */
router.get('/',secured,juice_controllers.juice_view_all_Page);


/* GET detail juice page */ 
router.get('/detail',secured, juice_controllers.juice_view_one_Page); 

/* GET create juice page */ 
router.get('/create',secured, juice_controllers.juice_create_Page);

/* GET create update page */ 
router.get('/update',secured, juice_controllers.juice_update_Page); 

/* GET delete juice page */ 
router.get('/delete',secured, juice_controllers.juice_delete_Page); 


module.exports = router;