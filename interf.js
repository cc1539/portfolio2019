
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
	/*
	setTimeout(function(){
		alert("Hi, I am an Albanian virus but because of poor technology in my country unfortunately I am not able to harm your computer. Please be so kind to delete one of your important files yourself and then forward me to other users. Many thanks for your cooperation! Best regards,Albanian virus");
	},10000);
	*/
}
