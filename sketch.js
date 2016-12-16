var blob;
var blobs = [];
var zoom = 1;

function setup(){
	createCanvas(600,600);
	blob = new Blob(0, 0, 16);
	for(var i = 0; i < 2000; i++){
		var x = random(-5*width, 5*width);
		var y = random(-5*height, 5*height);
		blobs[i] = new Blob(x, y, 4);
	}
}

function draw(){
	background(0)
	translate(width/2, height/2)
	var newzoom = 32/blob.r;
	zoom = lerp(zoom, newzoom, 0.1);
	scale(zoom);
	translate(-blob.pos.x, -blob.pos.y)

	for(var i = blobs.length-1; i >= 0 ; i--){
		blobs[i].show();
		if(blob.eats(blobs[i])){
			//blobs.splice(i, 1);
			var x = random(-5*width, 5*width);
			var y = random(-5*height, 5*height);
			blobs[i] = new Blob(x, y, 4);
		}
	}

	blob.update();
	blob.show();
}
