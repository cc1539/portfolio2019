
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
	forClass("category",function(elem){
		var html = elem.innerHTML;
		elem.innerHTML = html.substring(0,3)+'<span style="font-size:14px;">'+html.substring(3)+"</span>";
	});
	forClass("collapsible",function(elem){
		elem.nextElementSibling.style.display = "block";
		//elem.onclick = new Function('toggleCollapsible(this)');
	});
	
	var projdiv = document.getElementById("projdiv");
	if(projdiv) {
		// then use ajax to load data
		$.ajax({
			url: "data.json",
			success: function(response) {
				
				console.log(response);
				
				var data = JSON.parse(response).data;
				console.log(data);
				
				var project_entry = "<p class='collapsible'>+ </p><div><hr><p><b>Description</b></p><p class='desc'></p><hr><div class='imgcontain'><img><div class='projectlink'><a target='_blank'><img src='assets/giticon/GitHub-Mark-120px-plus.png' class='gitlink'></a></div></div><hr></div>";
				
				
				
				/*
				<p class="collapsible">+ Circadian Tetris</p>
					<div>
						<hr>
						
						<p><b>Description</b></p>
						<p class="desc">Tetris, but it flips around and inverts. The most challenging part of this project wasn't the actual gameplay, but rather the somewhat gaudy visual effects.</p><hr>
						
						<div class="imgcontain">
							<img src="assets/images/circtetris.png">
							<div class="projectlink">
								<a href="https://github.com/Metashian/-circadian-tetris" target="_blank">
									<img src="assets/giticon/GitHub-Mark-120px-plus.png" class="gitlink">
								</a>
							</div>
						</div>
						
						<hr>
						
					</div>
				*/
				
			}
		});
	}
	
	/*
	setTimeout(function(){
		alert("Hi, I am an Albanian virus but because of poor technology in my country unfortunately I am not able to harm your computer. Please be so kind to delete one of your important files yourself and then forward me to other users. Many thanks for your cooperation! Best regards,Albanian virus");
	},10000);
	*/
}
