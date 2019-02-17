Node.js + Express.js

Time to learn Node.js

Node is JavaScript that runs on my machine. Up until Node was created I could only run JavaScript in the browser because the browsers were the only ones that had a JavaScript engine like V8 and Node JS was created with the V8  engine in order to be able to run JavaScript anywhere including my computer including on robots and anywhere as long as I had Node JS.
Node is most popular for building servers. It’s really fast
The server of choice for any web apps or mobile apps out there to create an API or server. And great for building chat application, realtime communication.




Time to learn Express.js
And there many libraries that people use with Node to create a server. But the most popular and hands-down the best one right now is Express and I have here the State of JavsScript 2017 
https://2017.stateofjs.com/2017/back-end/results
https://2018.stateofjs.com/back-end-frameworks/overview/

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. there’s plenty of tools and information online for it. So, if I get stuck I am able to find an answer to my issue right away.
Let's install https://expressjs.com/en/starter/installing.html
Well express is really good at doing routing.


Postman:
Is great. It’s a great way to test out my server before I connect it to my front-end,
https://www.getpostman.com/
https://www.npmjs.com/package/body-parser


RESTful API:
https://searchmicroservices.techtarget.com/definition/RESTful-API

Now what is that?
Representational state transfer
A RESTful API  defines a set of function which developers can perform requests and receive responses via a HTTP protocol such as GET, POST, PUT, DELETE.
And I just think of this (‘/profile’) as the noun of what I want to receive the HTTP request is the verb and everything after the slash [/] is the noun. Now finally REST API are something called ‘stateless’ - meaning that calls can be made independently of one another and each call contains all the data necessary to complete itself successfully. A server doesn’t need to keep memoryizing things. Each request that comes in has enough information that the server can respond.


ExpressJS - Serving static files;
https://www.tutorialspoint.com/expressjs/expressjs_static_files.htm
Static files are files that clients download as they are from the server. Create a new directory, public. Express, by default does not allow you to serve static files. You need to enable it using the following built-in middleware.

            app.use(express.static('public'));

Note − Express looks up the files relative to the static directory, so the name of the static directory is not part of the URL.

And this is a server that I just built that serves simple static assets.
And as soon as I want to have something like an API where I in terrace with it I do GET, POST, PUT, DELETE. That’s when I start using my methods that I learned previously.
	Now that I have this basic foundation I am going to build my server for my app

String Decoder Module in node.js https://www.nodejsera.com/nodejs-tutorial-day22-string-decoder.html



Well, now I am  able to use programing in javaScript outside of just web browsers and outside of just building website and servers. What I can do now with this knowledge is I can make my life easier. I can think of case maybe I want to read an excel file and there are things that I can use, using read file and using NPM modules that I can read. Let say column in an excel and do some math. 
	Ex.Or maybe I have an excel sheet with all these emails and I want to send out an e-mail to let’s say 100 people on this list but I also don’t want to be caught spamming people by the google filter saying  that hey this account is spamming because they just sent 100 emails in two minutes. Well using something like Node, I can create perhaps something that in every six hours, sends out five e-mails.
	Ex.Another thing I can do if I had a robot for example something similar to a file system instead of having reading from the file 
fs.readFile('./hello.txt',(err, data) => {
I can read from the robot, maybe through wireless maybe through wires and get an input of some data  that the robot has. Maybe it detected a cat. Well using that input, I can do something I can respond maybe send me an e-mail saying that the robot just detected a cat and send that e-mail out or send an output. And that’s what we call input output, where I am getting 