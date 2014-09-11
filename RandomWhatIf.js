javascript:(function(){
	var url = "https://what-if.xkcd.com/";
	do{
		var num = Math.floor((Math.random() * 100) + 12)
	}while(num == 0);
	window.location=url.concat(num.toString());}
	)();