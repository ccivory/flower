
var flower = document.getElementById("flower");
var speed = 1.6;
window.onscroll = function()
{
var yOffset = window.pageYOffset;
flower.style.backgroundPosition = "0px "+ (yOffset / speed) + "px";
}


