const path=require('path');
const express = require('express');
const hbs=require('hbs');
const request = require('request');
const utils = require('./utils.js');

const publicPath=path.join(__dirname,'../public');
const viewsPath=path.join(__dirname,'../public/views');
const partialsPath=path.join(__dirname,'../public/partials');

const myApp=express();

// setting up handlebar engine and views path.
myApp.set('view engine','hbs');
myApp.set('views',viewsPath);   
hbs.registerPartials(partialsPath);

// setting up static directory serve.
myApp.use(express.static(publicPath));

// Instead of normal html files, we are using hbs files in the next 4 get methods.
myApp.get('',(req,res)=>{ 
    res.render('index',{
        name:'Jassi Brother'
    });
})

myApp.get('/help',(req,res)=>{
    res.render('help');
})

myApp.get('/about',(req,res)=>{
    res.render('about');
})

myApp.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:'There is no address.'
        })
    }
    utils.weatherData(req.query.address,(error,data)=>{
        if(error===undefined){
            res.send({
                location: req.query.address,
                forecast: data
            })
        }else{
            res.send({
                error:error
            })
        }
    })
})

myApp.get('*',(req,res)=>{
    res.render('404');
})

myApp.listen(3000,()=>{
    console.log('Optional this is, but still, server is up at 3000');
});

