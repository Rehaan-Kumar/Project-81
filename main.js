canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
console.log(ctx);

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 1;
ctx.rect(120, 143, 400, 175);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.lineWidth = 5;
ctx.arc(200, 210, 50, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "#ffdb58";
ctx.lineWidth = 5;
ctx.arc(250, 260, 50, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.lineWidth = 5;
ctx.arc(310, 210, 50, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.lineWidth = 5;
ctx.arc(370, 260, 50, 0, 2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 5;
ctx.arc(430, 210, 50, 0, 2 * Math.PI);
ctx.stroke();