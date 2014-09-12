javascript:(function(){
	var url = "https://what-if.xkcd.com/";
	
	var num = Math.floor((Math.random() * (111-1)) + 1)
	
	window.location=url.concat(num.toString());}
	)();