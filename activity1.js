x=0
function b(){
    x=x+1;
    document.getElementById("a").innerHTML="score -"+x;
}
function c(){
    localStorage.setItem("s",x);
}
function d(){
    window.location="index1.html";
}