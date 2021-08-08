const weatherForm=document.querySelector('form');
const input=document.querySelector('input');
const error=document.querySelector('#error');
const success=document.querySelector('#success');
weatherForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    if(input.value===''){
        error.textContent='Please type something atleast';
    }else{
        const url=`http://api.weatherstack.com/current?access_key=08029e3f29ca187064464ee8ce4ebf71&query=${input.value}`;
        fetch(url)
            .then((res)=>{
                res.json().then((data)=>{
                    if(data.error){
                        error.textContent='Please search something else';
                        success.textContent='';
                    }else{
                        success.textContent=`${data.current.weather_descriptions[0]} for location ${input.value}`;
                        error.textContent='';
                    }
                })
            })
    }
})