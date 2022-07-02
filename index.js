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
var i = 0;
var txt = 'Choose the Brand...';
var speed = 100;
function typing2(){
    if (i < txt.length) {
        document.getElementById("centered").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typing, speed);
    } 
   
}
function showmore(){
    
}
