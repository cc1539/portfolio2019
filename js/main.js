
function buildContent(data) {
	for(let key in data) {
		
		let name = data[key].link_name;
		let content = data[key].content;
		
		let section = $("<div id='"+key+"' class='entry'></div>");
		
		let section_link = $("<p>"+name+"</p>");
		
		section_link.click(function(){
			$("html,body").animate({scrollTop:section.offset().top-100});
		});
		
		$("#header").prepend(section_link);
		
		section.append("<h1>"+name+"</h1>");
		
		if(typeof content === 'string') {
			section.append("<p>"+content+"</p>");
		} else {
			// it's a dictionary
			content.forEach(function(entry){
				let part = $("<div></div>");
				for(let prop in entry) {
					if(prop=='title') {
						part.append("<p class='title'>"+entry[prop]+"</p>");
					} else if(prop=='content' || prop=='desc') {
						part.append("<p class='desc'>"+entry[prop]+"</p>");
					} else if(prop=='link') {
						if(key=="projects") {
							if(entry[prop]!="N/A") {
								var container = $("<div class='git-link'></div>");
								container.append("<img src='assets/images/"+entry["img"]+"'>");
								container.append("<div><img src='assets/images/git-link.png'></div>");
								part.append(container);
								container.click(function(){
									window.open(entry[prop],"_blank");
								});
							}
						} else if(key=="social") {
							part.append("<a href='"+entry["link"]+"' target='_blank'><img src='assets/images/"+entry["img"]+"' title='"+entry["tag"]+"'></a>");
						} else {
							part.append("<a href='"+entry[prop]+"' target='_blank'>Link</p>");
						}
					}
				}
				section.append(part);
				if(key!="social") {
					section.append("<hr>");
				}
			});
		}
		$("#content").append(section);
	}
}

$(function(){$.ajax({url:"content/data.json",success:buildContent});});

function adjustSize() {
	let win = $(this);
	if(win.width()<590) {
		$("#header").css("height","120px").css("padding-top","0px");
	} else {
		$("#header").attr("style","");
	}
	if(win.width()<750) {
		$("#title").text("Christopher's Portfolio");
	} else {
		$("#title").text("Christopher Cheng's Online Portfolio");
	}
}

adjustSize();
$(window).on('resize',adjustSize);