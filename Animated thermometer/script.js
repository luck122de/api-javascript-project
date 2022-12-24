
const tempload=()=>{
    const t=document.getElementById('temp');
    t.innerHTML="&#xf2cb";
    t.style.color="white"
    setTimeout(()=>{t.innerHTML="&#xf2ca";
    t.style.color="#FFFF00"},1000);
    setTimeout(()=>{t.innerHTML="&#xf2c9"},2000);
    setTimeout(()=>{t.innerHTML="&#xf2c7";
    t.style.color="#dc143c"},3000);
}

tempload();

setInterval(() => {
    tempload();
    
}, 4000);

// right click ---open browser --->ctrl+u it use to check whether liberies ha sattach or not.
