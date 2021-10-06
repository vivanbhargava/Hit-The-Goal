var canvas = new fabric.Canvas('myCanvas');
ball_y = 0;
ball_x = 0;
hole_y = 400;
hole_x = 800;
block_height = 5;
block_width = 5;
function load_img() {
	fabric.Image.fromURL("golf-h.png", function(Img){
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top: hole_y,
			left: hole_x
		});
		canvas.add(hole_obj);
	});
	new_image();
}
function new_image() {
	fabric.Image.fromURL("ball.png", function(Img){
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top: ball_y,
			left: ball_x
		});
		canvas.add(ball_obj);
	});
}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if ((ball_y == hole_y) && (ball_x == hole_x)) {
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML="You Have Hit The Goal!!!";
		document.getElementById("myCanvas").style.borderColor="lightgreen";
		document.getElementById("restart_button").innerHTML="Restart Game";
	}
	else {
		if (keyPressed == '38') {
			up();
			console.log("up");
		}else if (keyPressed == '40') {
			down();
			console.log("down");
		}else if (keyPressed == '37') {
			left();
			console.log("left");
		} else if (keyPressed == '39') {
			right();
			console.log("right");
		}
	}
	function up() {
		if (ball_y >= 5) {
			ball_y -= block_height;
			console.log("block height = " + block_height);
			console.log("When up arrow key is pressed, x = " + ball_x + ", Y = " + ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}
	function down() {
		if (ball_y <= 695) {
			ball_y += block_height;
			console.log("block height = " + block_height);
			console.log("When down arrow key is pressed, x = " + ball_x + ", Y = " + ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}
	function left() {
		if (ball_x >= 5) {
			ball_x -= block_width;
			console.log("block width = " + block_height);
			console.log("When left arrow key is pressed, x = " + ball_x + ", Y = " + ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}
	function right() {
		if (ball_x <= 945) {
			ball_x += block_width;
			console.log("block width = " + block_width);
			console.log("When right arrow key is pressed, x = " + ball_x + ", Y = " + ball_y);
			canvas.remove(ball_obj);
			new_image();
		}
	}
}
function restart_game() {
	document.getElementById("hd3").innerHTML="Move The Ball With Arrow Keys";
	document.getElementById("myCanvas").style.borderColor="";
	document.getElementById("restart_button").innerHTML="";
	ball_x = 0;
	ball_y = 0;
	new_image();
}