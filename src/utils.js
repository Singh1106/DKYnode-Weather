const request = require('request');

const weatherData=(city,callback)=>{
    const url=`http://api.weatherstack.com/current?access_key=08029e3f29ca187064464ee8ce4ebf71&query=${city}`; 
    request({url:url},(e,r)=>{
        const parsedData=JSON.parse(r.body);
        //console.log(parsedData);
        if(parsedData.success!==false){
            callback(undefined,parsedData.current.weather_descriptions[0]);
        }else{
            callback('There is an error.',undefined);
        }
    })  
}

module.exports={weatherData};