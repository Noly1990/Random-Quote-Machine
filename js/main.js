

function getQuote() {

	var xmlhttp;
	if(window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp = new XMLHttpRequest();
	} else { // code for IE6, IE5
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.open("POST", "https://andruxnet-random-famous-quotes.p.mashape.com/cat=", true);
	xmlhttp.setRequestHeader("X-Mashape-Key", "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V", "Accept", "application/json", "Content-type", "application/x-www-form-urlencoded");
	xmlhttp.send("fname=Yan&lname=Jun");

	var currentQuote = '',
		currentAuthor = '';
	var mycolor=randomColor();
	xmlhttp.onreadystatechange = function() {
		if(xmlhttp.readyState === 4 && xmlhttp.status === 200) {
			var jsonOb = JSON.parse(xmlhttp.responseText);
			currentAuthor = jsonOb.author;
			currentQuote = jsonOb.quote;
			$('#text').hide().text(jsonOb.quote).css('color',mycolor).animate({opacity:'show'},3000);
			$('#quote i').hide().css('color',mycolor).animate({opacity:'show'},3000);
			$('#author').hide().text('-'+jsonOb.author).css('color',mycolor).animate({opacity:'show'},3000);
			$('body').css("background-color",mycolor);
			$('#twit').css("background-color",mycolor);
			$('#tmb').css("background-color",mycolor);
			$('#getNew').css("background-color",mycolor);
			$('#twit').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
        	$('#tmb').attr('href', 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='+encodeURIComponent(currentAuthor)+'&content=' + encodeURIComponent(currentQuote));
		}
	}
}
$(document).ready(function() {
	$('#getNew').click(function(){
		getQuote();
	});
});

//tools function

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomArbitrary(min, max) {
	return Math.random() * (max - min) + min;
}

function randomColor() {
	var red = getRandomInt(0, 255);
	var green = getRandomInt(0, 255);
	var blue = getRandomInt(0, 255);
	return 'rgb(' + red + ',' + green + ',' + blue + ')';
}

//tools function end