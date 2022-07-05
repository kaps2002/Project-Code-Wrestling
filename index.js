function spark (){
    setTimeout(()=>{document.getElementById("spark").style.color="white"},10);
    setTimeout(()=>{document.getElementById("spark").style.backgroundColor="#28a745"},10);
    setTimeout(()=>{document.getElementById("spark").style.color="#28a745"},500);
    setTimeout(()=>{document.getElementById("spark").style.backgroundColor="transparent"},500);
    setTimeout(()=>{document.getElementById("spark2").style.color="#28a745"},500);
    setTimeout(()=>{document.getElementById("spark2").style.backgroundColor="transparent"},500);
    setTimeout(()=>{document.getElementById("spark2").style.color="white"},500);
    setTimeout(()=>{document.getElementById("spark2").style.backgroundColor="#28a745"},500);
    setTimeout(()=>{document.getElementById("spark2").style.color="#28a745"},1000);
    setTimeout(()=>{document.getElementById("spark2").style.backgroundColor="transparent"},1000);
}
var i = 0;
var txt = 'Find Your Creator...';
var speed = 100;
function typing(){
    if (i < txt.length) {
        document.getElementById("centered").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typing, speed);
    } 
   
}
var j = 0;
var t = 'Choose Your Brand...';
var s = 100;
function typ(){
    if (j < t.length) {
        document.getElementById("centered").innerHTML += t.charAt(j);
        j++;
        setTimeout(typ, s);
    } 
   
}
function showmore(){
    var a = document.getElementById("abcd");
    var btnText = document.getElementById("mybtn");
    if (a.style.display === "none") {
        // a.style.display = "none";
        // btnText.innerHTML = "Show More"; 
        btnText.innerHTML = "Show less"; 
        btnText.style.margin="auto";
        btnText.style.display="flex";
        btnText.style.alignItems="center";
        btnText.style.justifyContent="center";
        btnText.style.marginTop="20px";
        a.style.display = "flex";
        a.style.alignItems="center";
        a.style.justifyContent="space-evenly";
    }
    else {
        a.style.display = "none";
        btnText.innerHTML = "Show More"; 
        // btnText.innerHTML = "Show less"; 
        // btnText.style.margin="auto";
        // btnText.style.display="flex";
        // btnText.style.alignItems="center";
        // btnText.style.justifyContent="center";
        // btnText.style.marginTop="20px";
        // a.style.display = "flex";
        // a.style.alignItems="center";
        // a.style.justifyContent="space-evenly";
    }
}
function explore(){
    let cname=document.getElementById("cname").value;
    let cprofile=document.getElementById("cprofile").value;
    let desc=document.getElementById("desc").value ;
    
}
