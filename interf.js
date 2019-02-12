
function forClass(class_name,func) {
	var elems = document.getElementsByClassName(class_name);
	for(var i=0,l=elems.length;i<l;i++) {
		func(elems[i]);
	}
}

function toggleCollapsible(source) {
	var target = source.nextElementSibling;
	//target.style.display = (target.style.display==="block"?"none":"block");
	$(target).toggle(100);
}

window.onload = function() {
	
	var projdiv = document.getElementById("projdiv");
	if(projdiv) {
		// then use ajax to load data
		$.ajax({
			url: "data.json",
			success: function(response) {
				
				var project_entry_format = "<p class='collapsible'>+ </p><div><hr><p><b>Description</b></p><p class='desc'></p><hr><div class='imgcontain'><img><div class='projectlink'><a target='_blank'><img src='assets/giticon/GitHub-Mark-120px-plus.png' class='gitlink'></a></div></div><hr></div>";
				
				for(var i=0;i<response.data.length;i++) {
					var project_entry = $.parseHTML(project_entry_format);
					$(project_entry[0]).append(response.data[i].name);
					$(project_entry[1])
						.children('p')[1]
						.append(response.data[i].desc);
					$($($(project_entry[1])
						.children('div')[0])
						.children('img')[0])
						.prop('src','assets/images/'+response.data[i].img);
					$($($($(project_entry[1])
						.children('div')[0])
						.children('div')[0])
						.children('a')[0])
						.prop('href',response.data[i].link);
					
					$("#projdiv").append(project_entry);
				}
				
			}
		});
	}
	/*
	// for testing
	{
				
				var response = JSON.parse('{"data":[{"name":"Circadian Tetris","desc":"Tetris, but it flips around and inverts. The most challenging part of this project wasn\'t the actual gameplay, but rather the somewhat gaudy visual effects.","link":"https://github.com/Metashian/-circadian-tetris","img":"circtetris.png"},{"name":"Black Hole Visualizer","desc":"Simulates what a black hole of varying strength might look like. Use the mouse to look around, the WASD keys to move, and click and drag inside the window to control how strong the black hole is. At first, you will only see a sphere; this is not the black hole, which is actually at first between you and the sphere and starts at zero strength.","link":"https://github.com/Metashian/-black-hole-light-warp","img":"bhlw.png"},{"name":"Particles w/ Temperature","desc":"MPM fluid where particles can have a temperature. Particles with a temperature above zero will tend to repel other particles and those with a temperature below zero will try to stick to other particles. Left mouse button to heat and right mouse button to cool.","link":"https://github.com/Metashian/-temperature-particles","img":"partswtemp.png"},{"name":"2D Fluid & Gravity","desc":"MPM fluid coupled with barnes-hut for gravity. Press \'n\' to spawn particles.","link":"https://github.com/Metashian/-gravity-fluid","img":"gravfluid.png"},{"name":"Simple Euler Fluid","desc":"Euler fluid that, for once, runs on C++ instead of Java. The SFML library is used for the window-handling and graphics.","link":"https://github.com/Metashian/-sfml-euler-fluid-test","img":"eulerfluid.png"}]}');
				
				var project_entry_format = "<p class='collapsible'>+ </p><div><hr><p><b>Description</b></p><p class='desc'></p><hr><div class='imgcontain'><img><div class='projectlink'><a target='_blank'><img src='assets/giticon/GitHub-Mark-120px-plus.png' class='gitlink'></a></div></div><hr></div>";
				
				for(var i=0;i<response.data.length;i++) {
					var project_entry = $.parseHTML(project_entry_format);
					$(project_entry[0]).append(response.data[i].name);
					$(project_entry[1])
						.children('p')[1]
						.append(response.data[i].desc);
					$($($(project_entry[1])
						.children('div')[0])
						.children('img')[0])
						.prop('src','assets/images/'+response.data[i].img);
					$($($($(project_entry[1])
						.children('div')[0])
						.children('div')[0])
						.children('a')[0])
						.prop('href',response.data[i].link);
					
					$("#projdiv").append(project_entry);
				}

				
	}
	*/
	
	forClass("category",function(elem){
		var html = elem.innerHTML;
		elem.innerHTML = html.substring(0,3)+'<span style="font-size:14px;">'+html.substring(3)+"</span>";
	});
	forClass("collapsible",function(elem){
		elem.nextElementSibling.style.display = "block";
		//elem.onclick = new Function('toggleCollapsible(this)');
	});
	
	/*
	setTimeout(function(){
		alert("Hi, I am an Albanian virus but because of poor technology in my country unfortunately I am not able to harm your computer. Please be so kind to delete one of your important files yourself and then forward me to other users. Many thanks for your cooperation! Best regards,Albanian virus");
	},10000);
	*/
}
