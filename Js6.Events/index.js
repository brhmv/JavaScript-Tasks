function genRandomNum(e){
    const min = 1;
    const max = 100;
    let randomInteger = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("randomNumber").innerText = randomInteger.toString();
}

function getCordinates(e){
    document.getElementById("xSpan").innerText = "X="+e.clientX+"px ";
    document.getElementById("ySpan").innerText = "Y="+e.clientY+"px";
    console.log(e.clientX);
    console.log(e.clientY);
    
}

function hideShowText(e){
    let elementDisplay=document.getElementById("loremArticle").style.display;
    
    if(elementDisplay=="none")
        document.getElementById("loremArticle").style.display ="block";    
    else
        document.getElementById("loremArticle").style.display = "none";
    
   
    
}