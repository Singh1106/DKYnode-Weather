const weatherForm=document.querySelector('form');
const input=document.querySelector('input');
const error=document.querySelector('#error');
const success=document.querySelector('#success');
weatherForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    if(input.value===''){
        error.textContent='Please type something atleast';
    }else{
        fetch(`/weather?address=${input.value}`)
            .then((res)=>{
                res.json().then((data)=>{
                    if(data.error){
                        error.textContent='Please search something else';
                        success.textContent='';
                    }else{
                        success.textContent=`${data.forecast} for location ${data.location}`;
                        error.textContent='';
                    }
                })
            })
    }
})