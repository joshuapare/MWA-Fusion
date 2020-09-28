var express      = require("express"),
	  app          = express(),
    bodyParser   = require("body-parser");


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));



// LANDING ROUTES

app.get("/", function(req, res){
	res.render("index.ejs");
});

app.get("/login", function(req, res){
  res.render("login.ejs");
});

app.get("/register", function(req, res){
  res.render("register.ejs");
});




// APP ROUTES

app.get("/sounds", function(req, res){
  res.render("sounds.ejs");
});



// INVALID ROUTE CATCH

app.get("*", function(req, res){
  res.send("404 ERROR: PAGE NOT FOUND");
});


// Port Listening

app.listen(3000,function(){
	console.log("Request Made");
});