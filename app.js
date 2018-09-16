var express = require("express"); 
var app = express(); 
var bodyParser = require("body-parser"); 
var http = require("http"); 

app.use(bodyParser.urlencoded({extended:true})); 
app.set("view engine", "ejs"); 
app.use(express.static(__dirname + "/public")); 

var pictures = [
	{image: "https://images.unsplash.com/photo-1436262513933-a0b06755c784?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450"},
	{image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg"},
	{image: "https://images.unsplash.com/photo-1435771112039-1e5b2bcad966?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450"},
	{image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"},
	{image: "https://images.unsplash.com/photo-1442406964439-e46ab8eff7c4?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450"},
	{image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg"},
	{image: "https://images.unsplash.com/photo-1439524970634-649c37a69e5c?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&w=1450&h=825&fit=crop&s=bfda9916c885869b43b70738693428d9"},
	{image: "https://images.unsplash.com/photo-1439694458393-78ecf14da7f9?dpr=2&fit=crop&fm=jpg&h=825&q=50&w=1450"}
]

app.get("/", function(req,res){
	res.render("pictures",{pictures:pictures}); 
});

app.post("/", function(req,res){
	var image = req.body.name; 
	var newPicture = {image:image}
	pictures.push(newPicture);
	res.redirect("/"); 
});

app.get("/new", function(req, res){
	res.render("new.ejs");; 
});


app.listen('3000', function(){
    console.log("Pictures has started"); 
}); 