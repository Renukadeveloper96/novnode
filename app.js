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
const mongourl ="mongodb+srv://zomato:zomato127@cluster0.nbutl.mongodb.net/accessories?retryWrites=true&w=majority";
var  db;  


//get
app.get('/',(req,res) =>{
    res.send("welcome to accessories")
})


//list all quicksearches
app.get('/quicksearch',(req,res)=>{
    db.collection('main').find().toArray
    ((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
})

//list all accessories
/*app.get('/main',(req,res)=>{
    db.collection('main').find().toArray
    ((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
})*/

//list main wrt to product_id:query:http://localhost:8210/main?PRODUCTID=1
/*app.get('/main',(req,res)=>{
    var pro=req.query.pro?req.query.pro:"2";
    db.collection('main').find({"type.Product_Id":pro}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})*/
//list main wrt to product_id:query:http://localhost:8210/main?PRODUCTID=1
/*app.get('/main',(req,res)=>{
    var PRODUCTID=req.query.PRODUCTID
    db.collection('main').find({product_id:PRODUCTID}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})*/


//list main wrt to product_id:params:http://localhost:8210/main/1
app.get('/main/:PRODUCTID',(req,res)=>{
    var PRODUCTID=req.params.PRODUCTID
    db.collection('main').find({product_id:PRODUCTID}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})


http://localhost:8210/main/1?mealtype=3
app.get('/main:PRODUCTID',(req,res)=>{
    var query={}
    if(req.query.PRODUCTID){
        query={product_id:req.query.PRODUCTID}
    }else if(req.query.mealtype){
        query={"type.Product_Id":req.query.mealtype}
    }
    db.collection('main').find(query).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})


http://localhost:8210/filter/1?STUDID=1
app.get('/filter/:PRODUCTID',(req,res)=>{
    var PRODUCTID=req.params.PRODUCTID;
    var query={"type.Product_Id":PRODUCTID};
    if(req.query.STUDID){
        query={"type.Product_Id":PRODUCTID,"Subtype.sub_id":req.query.STUDID}
    }
    db.collection('all').find(query).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

//restaurant with mealtype
http://localhost:8210/all?TYPE=3
app.get('/all',(req,res)=>{
    var TYPE=req.query.TYPE?req.query.TYPE:3;
    db.collection('all').find({"type.ProductId":TYPE}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})


http://localhost:8210/all?TYPE=3
app.get('/all',(req,res)=>{
    var TYPE=req.query.TYPE?req.query.TYPE:3;
    db.collection('all').find({"type.mealtype":TYPE}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})



//query param:http://localhost:8210/all?cityId=7
app.get('/all',(req,res)=>{
    var cityId=req.query.cityId;
    db.collection('all').find({productid:cityId}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})
app.get('/all/:productid',(req,res)=>{
    var productid=req.params.productid;
    db.collection('all').find({productid:productid}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

app.get('/earrings',(req,res) =>{
    var query = {}
    if(req.query.stateId){
        query={state_id:Number(req.query.stateId)}
        console.log(query)
    }else if(req.query.ProductId){
        query={"type.ProductId":Number(req.query.ProductId)}
    }
    db.collection('Hairacc').find(query).toArray((err,result)=>{
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
app.get('/earrings',(req,res)=>{
    db.collection('earrings').find().toArray
    ((err,result) =>{
        if(err) throw err;
        res.send(result)
    })
})
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


