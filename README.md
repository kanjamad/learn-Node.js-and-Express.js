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