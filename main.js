var mouseEvent = "empty";
canvas.getElementById("myCanvas")
ctx=canvas.getContext("2d")
Colour = "red";
line_width = 2;

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e){
    Colour = document.getElementById("Colour").Value;
    line_width = document.getElementById("line_width").Value;
    radius = document.getElementById("radius").Value;
    mouseEvent= "mouseDown";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    var current_position_of_mouse_x = e.clientX.canvas.offsetLeft;
    var current_position_of_mouse_y = e.clientX.canvas.offsetTop;

    if(mouseEvent=="mouseDown"){
        console.log("Current Position Of X And Y Coordinates = ")
        console.log("x ="+current_position_of_mouse_x,"y ="+current_position_of_mouse_y)
        ctx.beginPath();
        ctx.strokeStyle = Colour;
        ctx.linewidth = line_width;
        ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y, radius ,0 , 2 * Math.PI);
        ctx.stroke();
    }
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent = "mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent = "mouseleave";
}
function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}