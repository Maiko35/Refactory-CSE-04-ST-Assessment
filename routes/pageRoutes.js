const express = require('express');
const router = express.Router();

router.get("/form", (req,res) =>{
    res.render("index");
});
router.get("/success", (req,res) => {
    res.render("successfulForm");
});

router.post('/form', (req, res) => {
    console.log(req.body)//Prints to the console
    res.redirect('/success')
});

//All my routes should be above this line.
router.get("*", (req, res) => {
    // new
    res.send("ERROR! page does not exist");
  });
  

module.exports = router;