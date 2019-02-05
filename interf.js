
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
}
