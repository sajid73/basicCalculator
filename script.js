function hideArea(isdark){
    document.getElementById("bodyId").style.background = "black";
    document.getElementById("bodyId").style.color = "white";
    document.getElementById("blackbtn").style.display = "none";
    document.getElementById("whitebtn").style.display = "inline";
    if(isdark == false){
        document.getElementById("bodyId").style.background = "white";
        document.getElementById("bodyId").style.color = "black";
        document.getElementById("whitebtn").style.display = "none";
        document.getElementById("blackbtn").style.display = "inline";
    }
}
function changeArea(){
    document.getElementById("introarea").style.display = "none";

}