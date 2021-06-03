
var last_position_of_x, last_position_of_y;
var width=screen.width;
var height=screen.height;
var new_width=screen.width-70;
var new_height=screen.height-200;
    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    color = "black";
    width_of_line = 2;

    canvas.addEventListener("touchstart", my_touchstart);
    
    function my_touchstart(e)
    {console.log("toucheventidentified");
        color = document.getElementById("colour_input").value;
        width_of_line = document.getElementById("width_input").value;
    }
    canvas.addEventListener("touchmove", my_touchmove);
    function my_touchmove(e)
    {

         current_position_of_mouse_x = e.touches[0].clientX - canvas.offsetLeft;
         current_position_of_mouse_y = e.touches[0].clientY - canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
        ctx.stroke();
        last_position_of_x = current_position_of_mouse_x; 
        last_position_of_y = current_position_of_mouse_y;
    }
function clean() {
ctx.clearRect(0,0,canvas.width,canvas.height);    
}