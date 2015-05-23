$.fn.readTimer = function() {

var wordCountApp = {};
wordCountApp.init = function() {
	//This will return all the words and the length
	//.text() will get the text in the selected container
	//.split(' ') on a space will return an array
	//With all the words.
	//.length will tell us how many items are in the array
	//aka how many words
	//Get time it will take to read
	var wordCount = $('.wordCount').text().split(' ').length/300;
	
	//If that time is greater than 1
	if (wordCount > 1) {
		readTimeResult = "This article will take " + Math.round(wordCount) + " minutes to read"; 
	}
	//Else if it is less than 1
  	else if (wordCount < 1) {
  		readTimeResult = "This article will take " + (wordCount * 100) + " seconds to read"; 
  	}
  	//Then append the right string for the job
	$(".readTimeResult").append(readTimeResult);


};


$(function () {
	wordCountApp.init();
});
}