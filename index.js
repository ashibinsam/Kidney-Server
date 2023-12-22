const bodyParser = require('body-parser');
let express = require('express');
let app = express();

let port = 3030;
let currentKidney = 2;
let replacedKidney =0;

app.use(bodyParser.json());

// getting the number of current and replaced kidneys using the get method
app.get('/', (req, res)=>{

    res.json({
        CurrentKidney:currentKidney,
        ReplacedKidney:replacedKidney
    });
});

// insert a kidney with the post request
app.post('/', (req, res)=>{
    currentKidney += req.query.n ? parseInt(10,req.query.n) : 0;
    res.json({
        CurrentKidney:currentKidney,
        ReplacedKidney:replacedKidney
    });
});

//replace kidney for put request

app.put('/', (req, res)=>{
    replacedKidney += req.query.n ? parseInt(10,req.query.n) : 0;
    res.json({
        CurrentKidney:currentKidney,
        ReplacedKidney:replacedKidney
    });
});

app.delete('/', (req, res)=> {
    
    currentKidney -= req.query.n ? parseInt(10,req.query.n) : 0;
    if (currentKidney<0){
        currentKidney += req.query.n ? parseInt(10,req.query.n) : 0;
        res.status(422).send('Not enough Kidneys avaliable :((');
    }
    res.json({
        CurrentKidney:currentKidney,
        ReplacedKidney:replacedKidney
    });
    
});

app.listen(port,()=>{
    console.log(`The kidney server is started in port ${port}`)
});