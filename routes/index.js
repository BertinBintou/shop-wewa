var express = require('express');
var router = express.Router();

var dataBandana = [
{name:"Bandana violet", url:"/images/wewa1.png", description:"Bandana violet et violet, 50 cm x 50 cm en wax",prix:30},
{name:"Bandana vert", url:"/images/wewa2.png", description:"Bandana vert et bleu, 50 cm x 50 cm en wax",prix:30},
{name:"Bandana violet", url:"/images/wewa3.png", description:"Bandana violet et rose, 50 cm x 50 cm en wax",prix:30},
{name:"Lot de 4 bandanas", url:"/images/wewa4.png", description:"Lot de 4 bandanas , 50 cm x 50 cm en wax",prix:120},
{name:"Bandana multicolore", url:"/images/wewa5.png", description:"Bandana muticolore, 50 cm x 50 cm en wax",prix:35},
{name:"Bandana bleu", url:"/images/wewa6.png", description:"Bandana bleu et violet, 50 cm x 50 cm en wax",prix:35},
{name:"Bandana Terre", url:"/images/wewa7.png", description:"Bandana Terre et violet, 50 cm x 50 cm en wax",prix:30},
{name:"Bandana carreau", url:"/images/wewa8.png", description:"Bandana bleu et violet, 50 cm x 50 cm en wax",prix:30},
{name:"Bandana Fleur", url:"/images/wewa9.png", description:"Bandana bleu, blanc et rouge, 100 cm x 100 cm en wax",prix:50},


]




var bandanaCorbeille = [
  {name:"Bandana violet", url:"/images/wewa1.png", description:"Bandana violet et violet, 50 cm x 50 cm en wax",prix:30, quantite :1},
//   {name:"Bandana vert", url:"/images/wewa2.png", description:"Bandana vert et bleu, 50 cm x 50 cm en wax",prix:30, quantite : 2},
//   {name:"Bandana violet", url:"/images/wewa3.png", description:"Bandana violet et rose, 50 cm x 50 cm en wax",prix:30, quantite :1},
// {name:"Lot de 4 bandanas", url:"/images/wewa4.png", description:"Lot de 4 bandanas , 50 cm x 50 cm en wax",prix:120, quantite :2},
// {name:"Bandana multicolore", url:"/images/wewa5.png", description:"Bandana muticolore, 50 cm x 50 cm en wax",prix:35, quantite :4},
// {name:"Bandana bleu", url:"/images/wewa6.png", description:"Bandana bleu et violet, 50 cm x 50 cm en wax",prix:35, quantite :1},
// {name:"Bandana Terre", url:"/images/wewa7.png", description:"Bandana Terre et violet, 50 cm x 50 cm en wax",prix:30, quantite :3},
// {name:"Bandana carreau", url:"/images/wewa8.png", description:"Bandana bleu et violet, 50 cm x 50 cm en wax",prix:30, quantite :1},
// {name:"Bandana Fleur", url:"/images/wewa9.png", description:"Bandana bleu, blanc et rouge, 100 cm x 100 cm en wax",prix:50, quantite :1},
  

]

console.log(bandanaCorbeille)


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {dataBandana:dataBandana});
});




/* shop */

router.get('/shop', function(req, res, next) {
 if (req.query.prixFront > 0) {bandanaCorbeille.push({
    url: req.query.ImageFront,
    name:req.query.nomFront,
    description:req.query.descFront,
    prix:req.query.prixFront,
    quantite: 1,

  })}

  res.render('shop',  {bandanaCorbeille:bandanaCorbeille});
});


/* delet */

router.get('/delete-shop', function(req, res, next) {

  bandanaCorbeille.splice(req.query.position,1)
  
 
   res.render('shop', {bandanaCorbeille:bandanaCorbeille} );
 });


 /* delet */

router.post('/update-shop', function(req, res, next) {

  var position = req.body.position;
  var NewQuantite = req.body.quantite;
  
  bandanaCorbeille[position].quantite = NewQuantite;
  
 
   res.render('shop', {bandanaCorbeille:bandanaCorbeille} );
 });
 






module.exports = router;
