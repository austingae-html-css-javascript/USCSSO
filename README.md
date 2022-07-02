Hello, USCSSO. I am Austin Gae, the developer of this website; and I am going to explain some things you must know to operate this website.
I have coded this project in a way in which making changes to this website will not be difficult (maybe a little bit?) to someone who has no experience in programming.
Now, let's get to it!

1) HOW DO YOU ADD AN ARTICLE TO THE /articles page?
The explanation looks long, but once you go through the process once, you will realize how easy it is to add an article to the website!

First, open the articles directory, create a new file with the extension ".md".
The name of the file will be what shows up in the URL.

Then, copy this template into the file: 



---
title: ""
date: ""
author: ""
excerpt: ""
image: "/images/articles/"
slug: ""
---



After you have done so, type in the article's title, date published, author, and excerpt. 

For the image, you first have to add an image to the project. You can add an image to the project
by going to the public/images/articles directory; and then placing the image in the directory. 
Then go back to the file with the extension '.md', and then add the image name to the end of "/images/articles/"

For the slug, copy and paste the file name (excluding the '.md' extension). 

Now, below the three dash line (---), add the content of the article. 

In the content of the article, you might want to add some spacing in between paragraphs, add a link to a word, make a word bold, etc.
Learn how to do those by reading this simple documentation (don't worry! this documentation isn't diffcult!): https://www.markdownguide.org/basic-syntax/

Congrats! You did it. Not too diffcult, eh?
Now, go reload the website to see the updated changes. 