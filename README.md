# timeStamp
First project on [this](https://www.quora.com/What-does-a-good-junior-backend-developer-portfolio-website-look-like/#w5Ttk5Aw21) list and part of my effort to build a better back-end portfolio. API uses `new Date()` to take the input, entered after the root URL (`localhost:3000/2015-01-01`), and return a response with an object containing UNIX and UTC timestamps. If left blank, the current time will be used. Blank inputs are handled by running a seperate function when requests are made to `localhost:3000//`.

Unit tests can be ran with `npm test`.
