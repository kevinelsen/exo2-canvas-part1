var dessins = document.getElementById('canvas');
var ctx = dessins.getContext('2d');
//Le toit
ctx.beginPath();
ctx.moveTo(180,120);
ctx.lineTo(370,120);
ctx.lineTo(275,20);
ctx.fillStyle = '#d7823e';
ctx.fill();

//La maison
ctx.fillStyle = 'lightblue';
ctx.fillRect(180,120,190,180);
ctx.fill();

//fenêtres n°1
ctx.fillStyle = '#c9c9c9';
ctx.fillRect(200,140,50,50);
ctx.fill();

//fenêtres n°2
ctx.fillStyle = '#c9c9c9';
ctx.fillRect(295,140,50,50);
ctx.fill();

//la porte
ctx.fillStyle = '#c9c9c9';
ctx.fillRect(255,250,40,50)
ctx.fill();
