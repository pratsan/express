var express = require('express');
var app = express();
app.use('/images', express.static('assets'));
// var cor=require('cors');
// app.use(cor);
const cors = require('cors');
app.use(cors());
let banner=[{
  "title":"banner1",
  "image":"http://localhost:3000/images/superSale.png"
},
  {
    "title":"banner2",
    "image":"http://localhost:3000/images/saveCoin.png"
  }
]

let products=[{
  id:1,
  "productType":"Earphones",
  "image":"http://localhost:3000/images/Earphones 2.png",
  isActive:true,
  "originalPrice":25000,
  "discountPrice":20,
  "offerStartsIn":"15:00:00"
},
  {
    id:2,
    "productType":"Game Console",
    "image":"http://localhost:3000/images/gamingConsole.png",
    isActive:true,
    "originalPrice":50000,
    "discountPrice":20,
    "offerStartsIn":"48:00:00"
  },
  {
    id:3,
    "productType":"Phone",
    "image":"http://localhost:3000/images/Smartphone.png",
    isActive:false,
    "originalPrice":50000,
    "discountPrice":20,
    "offerStartsIn":"48:00:00"
  },

]

app.get('/banner', function (req, res) {
  res.send(banner);
})
app.get('/products', function (req, res) {

  res.send(products);
})

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log("listening at http://%s:%s", host, port)
})