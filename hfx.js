
var isMobile;

var boxScale;
var boxes = [];

var fadeShade = 0;

function lineBetweenVertices(a,b) {
	line(a.x,a.y,b.x,b.y);
}

class Box {
	
	constructor(time) {
		this.reset(time);
	}
	
	reset(time) {
		this.z = 200*(1-time);
		this.x = random(-1,1)*.05*window.innerWidth;
		this.y = random(-1,1)*.05*window.innerHeight;
		this.size = 7;
	}
	
	move() {
		this.z--;
		if(this.z<0) {
			this.reset(0);
		}
	}
	
	draw() {
		stroke(fadeShade+(255-fadeShade)*(this.z/100-1));
		var verts = {};
		for(var i=0;i<=1;i++) { verts[i]={}
		for(var j=0;j<=1;j++) { verts[i][j]={}
		for(var k=0;k<=1;k++) {
			var vert = {
				'x':this.x+i*this.size,
				'y':this.y+j*this.size,
				'z':this.z+k*this.size
			};
			vert.x /= vert.z/boxScale;
			vert.y /= vert.z/boxScale;
			vert.x += window.innerWidth/2;
			vert.y += window.innerHeight/2;
			verts[i][j][k] = vert;
		}
		}
		}
		for(var i=0;i<=1;i++) {
		for(var j=0;j<=1;j++) {
		for(var k=0;k<=1;k++) {
			var v0 = verts[i][j][k];
			var v1;
			if(i==0) { v1=verts[i+1][j][k]; lineBetweenVertices(v0,v1); }
			if(j==0) { v1=verts[i][j+1][k]; lineBetweenVertices(v0,v1); }
			if(k==0) { v1=verts[i][j][k+1]; lineBetweenVertices(v0,v1); }
		}
		}
		}
	}
	
}

var fx = {
	'lines':function() {
		
		stroke(fadeShade);
		
		var speed = 50;
		var start = (frameCount*.5)%speed;
		
		var length = window.innerWidth+window.innerHeight;
		
		for(var i=start;i<length;i+=speed) {
			strokeWeight((sin((i+frameCount*3)/100.)*.5+.5)*3+1);
			line(i,0,0,i);
		}
		
	},
	'boxes':function() {
		strokeWeight(1);
		for(var i=0;i<boxes.length;i++) { boxes[i].move(); }
		for(var i=0;i<boxes.length;i++) { boxes[i].draw(); }
	},
	'fractal':function() {
		
	},
	'epilepsy':function() {
		background(random(0,255));
	}
};

var fxlist = {};
var fxindex = 0;
var fxtimer = 0;
var fxfade = 0;

function setup() {
	
	isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
	if(isMobile) {
		noLoop();
		return; // for now, if we're on mobile, just don't do anything.
	}
	
	createCanvas(window.innerWidth, window.innerHeight);
	
	for(var i=0;i<50;i++) {
		boxes.push(new Box(1-i/50.));
	}
	
	boxScale = 400;
	
	fxlist = ['lines','boxes','fractal'];
	fxindex = 0;
	fxtimer = 0;
	fxfade = 0;
	
}

function draw() {
	
	clear();
	//background(255);
	
	if(fxfade>0) {
		
		fadeShade = 200+55*(1-fxfade);
		fx[fxlist[fxindex]]();
		
		var nextfxindex = (fxindex+1)%fxlist.length;
		
		fadeShade = 200+55*fxfade;
		fx[fxlist[nextfxindex]]();
		
		fxfade-=.1;
		if(fxfade<0) {
			fxindex = nextfxindex;
		}
		
	} else {
		
		fadeShade = 200;
		fx[fxlist[fxindex]]();
		
		fxtimer++;
		if(fxtimer>200) {
			fxtimer = 0;
			fxfade = 1;
		}
	}
	
}

function windowResized() {
	createCanvas(window.innerWidth, window.innerHeight);
}
