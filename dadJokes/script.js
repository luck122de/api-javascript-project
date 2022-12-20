
const jokes= document.querySelector('#joke');
const jokebtn=document.querySelector('.btn');



//respone.json()//this method that response are in html form and it convert into json form.

// const generatejokes=()=>{
    // const setHeader={
    //     headers:{
    //         Accept:"application/json"
    //     }
    // }
    // fetch('https://icanhazdadjoke.com/',setHeader).
    // then((res)=>res.json() ).then((data)=>jokes.innerHTML=data.joke).catch((error)=> console.log(error)
    // )

                 //async await
    // async function generateJokes(){} //this for traditional method to write function

    const generatejokes= async()=>{
        try
    {const setHeader={
        headers:{
            Accept:"application/json"
        } 
    }
     
   const res=await fetch(

'https://icanhazdadjoke.com/',setHeader);
  const data =await res.json();
  jokes.innerHTML=data.joke;}
  catch(err){
    console.log(`the error is ${err}`);
  }
}


jokebtn.addEventListener('click', generatejokes);
generatejokes();