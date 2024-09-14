// 1. Dependencies
const express = require('express');
const path = require('path');











//Importing Routes
const pageRoutes = require('./routes/pageRoutes')
// const signupRoutes = require('./routes/signupRoutes')



//2. Instantiations
const app = express();
const port = 2000;


//3. Configurations

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));






//4. Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true }));
app.use(express.json());




//5. Routes
app.use('/', pageRoutes);
// app.use('/', signupRoutes);






//Any route that I put beyond the code below will be ignored.
app.get("*", (req, res) => {
    res.send("error! page does not exist");
  });



//6.Bootstrapping a server
app.listen(port, () => console.log(`listening on port ${port}`));