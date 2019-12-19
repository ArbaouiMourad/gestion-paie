const express=require("express");
const router =express.Router() ;
//Info Model
const Data = require('../models/info');
//get
router.get('/',(req,res)=>{
Data.find()
.then(data=>res.json(data))
.catch(err=>res.send('cannot get'))
}
)
//get one
router.get('/:id',(req,res)=>{
Data.findOne(req.params.id)
.then(data=>res.json(data))
.catch(err=>res.send('cannot get'))
})
//post 
router.post('/', async (req, res) => {
    try {
      const newData = new Data({
        namemployeur: req.body.namemployeur,
        adressemployeur: req.body.adressemployeur,
        numemployeur:req.body.numemployeur,
        phonemployeur: req.body.phonemployeur,
        namemployé: req.body.namemployé,
        prenomemployé: req.body.prenomemployé,
        categoryemployé:req.body.categoryemployé,
        numcnssemployé:req.body.numcnssemployé,
        typecontrat:req.body.typecontrat
      });
      data = await newData.save();

      res.json(data);
    } catch (err) {
      res.send("cannot post");
    }
  });
  module.exports = router;