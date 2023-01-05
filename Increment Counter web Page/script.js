const counters=document.querySelector('.counter');

counters.forEach((counter)=>{
    counter.innerHTML=0;

     const updateCounter=()=>{
 const targetCount=+counter.getAttribute('data-target');

 const startingCount=Number(counter.innerHtml);
 const incr=target/100;

//         if(startingcount<target){
//             counter.innerHTML=`${Math.round(startingcount+incr)}`;
//             setTimeout(updatecounter,1000);
//         }else{
//             count.innerHTML=target;
//         }
     }






     updateCounter();
})

