var color = 0;
function inicio(){
 var inputColor = prompt("color: ");

 checkColor(inputColor);
 if(color==1){
    document.body.style.backgroundColor = inputColor;
 }
 else{
    window.alert('Color incorrecto, reinicia');
 }
}

function checkColor(inputColor){
    var colors = ['white','black','red', 'green'];

    for(var i=0; i<colors.length; i++){
        if(inputColor==colors[i]){
            color = 1;
        }
    }
    
}