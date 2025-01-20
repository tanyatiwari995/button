var index = 0;
function changeColor(){
    var color=["red", "yellow","green","pink","aqua","navy","orange","brown","violet"];
     
    document.getElementsByTagName("body")[0].style.background= color[index++];
    document.getElementsByTagName("p")[0].style.color = color[index++];
    if(index>=color.length-1){
        index = 0;
    }
}
