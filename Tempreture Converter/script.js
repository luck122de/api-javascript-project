const calculateTemp=()=>{
    const num=document.getElementById('temp_value').value;
    //console.log(`${num}`);
    const temp_type=document.getElementById('different_temp');
    const Valuetemp=different_temp.options[temp_type.selectedIndex].value;//it is important line return index value and we can store it.

    const cel=(cel)=>{
        let fehrenheit=Math.round((cel*9/5)+32);
        return fehrenheit;
    }
    const fer=(feh)=>{
        let celsius=Math.round((feh-32)*5/9);
        return celsius;
    }
    
    let result;

    if(Valuetemp=="cel"){
      result=cel(num);
      document.getElementById('resultContainer').innerHTML=`=${result}°F`;
    }
    else{
        result=fer(num);
        document.getElementById('resultContainer').innerHTML=`=${result}°C`;
    }
    


}