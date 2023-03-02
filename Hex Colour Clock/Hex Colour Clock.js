
var colour = document.getElementById('colour');
var clock =document.getElementById("clock")

function displayTime() {
    
    var time = new Date();
    var h = time.getHours().toString(); 
    var m = time.getMinutes().toString();   
    var s = time.getSeconds().toString();
   
    if (h.length < 2) {
     h ="0"+h;
    }

    if (m.length < 2) {
     m ="0"+m;
    }

    if (s.length < 2) {
     s ="0"+s;
    } 
    
    var colourString = "#" +h+m+s;
    var clockString = h+":"+m+":"+s;

    colour.textContent = colourString.toString();
    clock.textContent = clockString.toString();

    
    document.body.style.background = colourString;
    
}
displayTime();
setInterval(displayTime, 1000);
