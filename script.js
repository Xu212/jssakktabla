window.addEventListener("load", init);
function cellaszinezes(){
    var cellak = document.querySelectorAll(".cella");
    var szin = "black";
    var szin2= "white";
    var i = 0;
    var element = document.getElementsByClassName("cella");
    var positionInfo = window.getComputedStyle(element[0]);
    var meret = positionInfo.width;
    for (let index = 0; index < 64; index++) {
        cellak[index].style.height=meret
        
    }
    for (let index = 0; index <8; index++) {
        for (let j = 0; j < 8; j++) {
            if (j %2===0){
                cellak[i].style.backgroundColor=szin;
                cellak[i].style.color=szin2;
            }
            else{
                cellak[i].style.backgroundColor=szin2;
                cellak[i].style.color=szin;
            }
        i++
        }
        if(index%2===1){
            szin= "black";
            szin2= "white"
        }
        else{
            szin="white";
            szin2="black"
        }
    }   
}
function babuk(){
    event.target.innerHTML="&#9814;";
}
function init(){
    var txt="";
    for (let index = 0; index < 64;index++) {
        txt += "<div class ='cella'></div>"
    }
    document.getElementById("saktabla").innerHTML=txt;
    cellaszinezes();
    var cellak = document.querySelectorAll(".cella");
    for (let index = 0; index < 64; index++) {
        cellak[index].addEventListener("click", babuk)
    }
}