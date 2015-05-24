#readTimer

A UX plugin that calculates how long any article will take to read. 
Designed for bloggers, writers, and anyone who hosts a lot of text-heavy articles on their site. 

The plugin will feed a sentence into div called readTimeResult, which you can place anywhere on your page. In this example, I chose to put it under the byline.  
<pre>
<code>
	<p>Lorem ipsum dolor sit amet.</p>
	<p>By Lorem ipsum dolor.</p>
	<p><div class="wordCount"></p>	
	<p><div class="readTimeResult"></div></p>
	<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab hic cupiditate ipsa excepturi esse sed pariatur sit recusandae autem molestias, perspiciatis natus perferendis optio qui, eos consequuntur commodi, cum soluta.</p>
</code>	
</pre>	

#How to use

Add the readTimer.js file into your site's root file, then call it with your HTML using a script tag.

In your HTML, add a div with the class of readTimeResult. This will hold the string. 

Wrap your text article in a div with the class of wordCount. This will 

