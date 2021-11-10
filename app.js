var express = require('express');
const app = express();
const bodyParser=require('body-parser');
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT||8210;
//const port=8210;
const mongo = require('mongodb');
const MongoClient =mongo.MongoClient;
const cors = require('cors');
//to recive data from form
app.use (bodyParser.urlencoded({extended:true}));
app.use (bodyParser.json());
app.use (cors());
//const mongourl ="mongodb://localhost:27017"
const mongourl ="mongodb+srv://edurekajuly:july1234@cluster0.nbutl.mongodb.net/accessories?retryWrites=true&w=majority"
var  db;  


//get
app.get('/',(req,res) =>{
    res.send("welcome to Api 2")
})

//list all cities
app.get('/earrings',(req,res)=>{
    db.collection('earrings').find().toArray
    ((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
})
 //list all cities
/*app.get('/earrings/:cityId',(req,res)=>{
    var cityId=req.params.cityId;
    console.log("cityId>>>.",cityId)
    db.collection('earrings').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})*/
//http://localhost:8210/earrings/4

app.get('/earrings/:productid',(req,res)=>{
    var productid=req.params.productid;
    db.collection('earrings').find({productid:productid}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

// list all hairaccessories
app.get('/Hairacc',(req,res)=>{
    db.collection('Hairacc').find().toArray
    ((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
})
// http://localhost:8210/Hairacc/1
app.get('/Hairacc/:productid',(req,res)=>{
    var productid=req.params.productid;
    db.collection('Hairacc').find({productid:productid}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

// list all eyemask
app.get('/eyemask',(req,res)=>{
    db.collection('eyemask').find().toArray
    ((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
})
// http://localhost:8210/eyemask/1
app.get('/eyemask/:productid',(req,res)=>{
    var productid=req.params.productid;
    db.collection('eyemask').find({productid:productid}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

// list all eyemask
app.get('/Sunhat',(req,res)=>{
    db.collection('Sunhat').find().toArray
    ((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
})
// http://localhost:8210/eyemask/1
app.get('/Sunhat/:productid',(req,res)=>{
    var productid=req.params.productid;
    db.collection('Sunhat').find({productid:productid}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

/*//http://localhost:8210/earrings?productid=1
app.get('/earrings',(req,res)=>{
    var productid=req.query.productid;
    db.collection('earrings').find({productid:productid}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
*/
MongoClient.connect(mongourl, (err,client) => {
    if(err) console.log("Error While Connecting");
    db = client.db('accessories');
    app.listen(port,()=>{
        console.log(`listening on port no ${port}`)
    });
})


