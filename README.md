#readTimer

A UX plugin that calculates how long any article will take to read, and presents a string telling the reader how long they should expect an article to read through.
The readTimer plugin is designed for bloggers, writers, and anyone who hosts a lot of text-heavy articles on their site. 
 

##How to use 

Add the readTimer.js file into your site's root file, then call it with your HTML using a script tag.

In your HTML, add a div with the class of readTimeResult. This will present the string 

"This article will take " + Math.round(wordCount) + " minutes to read"

into the readTimeResult div, which you can place anywhere on your page. I'd recommend adding it under the headline or immediately after the end of your article.

Wrap your text article in a div with the class of wordCount. This will produce an array, counting the number of words within the div, then mutiply the number of words by the average adult reading speed of 300 words per minute.

The resulting number is stored in a variable called wordCount, and then fed into the readTimeResult div as a whole number using Math.round.

The resulting string will then be presented in your HTML as "This article will take [NUMBER OF MINUTES] to read." If the article will take less than a minute to read, "minutes" will be replaced by "seconds" in the presented sentence.

##Options

If your site caters to specific auidiences: e.g.: an older audience who are less adjusted to reading on the web, or a younger audience who may be learning to read, you might want to adjust the expected time it will take to read an article. 

This is easy to do. In the wordCount variable:

var wordCount = $('.wordCount').text().split(' ').length/300;

simply change the number after 'length/'. For example, if you expect your audience to read slower than the average online reader, change the '300' to '400'. 