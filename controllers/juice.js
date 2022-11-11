var juice = require('../models/juice'); 
// List of all juice 
exports.juice_list = async function(req, res) { 
    try{ 
        thejuice = await juice.find(); 
        res.send(thejuice); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// VIEWS 
// Handle a show all view 
exports.juice_view_all_Page = async function(req, res) { 
    try{ 
        thejuice = await juice.find(); 
        res.render('juice', { title: 'juice Search results', results: thejuice }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 

// for a specific juice. 
exports.juice_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await juice.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
 // Handle juice create on POST. 
exports.juice_create_post = async function (req, res) {
    console.log(req.body)
    let document = new juice();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"juice_flavour : "blue berry",juice_name : "buleberry",juice_quantity : 250'}
    document.juice_flavour = req.body.juice_flavour;
    document.juice_name = req.body.juice_name;
    document.juice_quantity = req.body.juice_quantity;
   

    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle juice delete form on DELETE.
exports.juice_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: juice delete DELETE ' + req.params.id);
};
// Handle juice update form on PUT.
exports.juice_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: juice update PUT' + req.params.id);
};
exports.juice_view_all_Page = async function (req, res) {
    try {
        thejuice = await juice.find();
        res.render('juice', { title: 'juice Search results', juice_results: thejuice });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle juice update form on PUT. 
exports.juice_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await juice.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.juice_flavour)toUpdate.juice_flavour = req.body.juice_flavour; 
        if(req.body.juice_name) toUpdate.juice_name = req.body.juice_name; 
        if(req.body.juice_quantity) toUpdate.juice_quantity= req.body.juice_quantity; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 