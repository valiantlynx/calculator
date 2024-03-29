const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/', function(req, res) {
    //console.log(request);
    res.sendFile(__dirname + "/index.html");
});
app.post('/', function(req, res) {
    console.log(req.body);
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("The result of the calculation is: " + result);
});



app.get("/bmicalculator", function(req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});
app.post("/bmicalculator", function(req, res) {
    console.log(req.body);
    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);
    console.log(req.body);

    var bmi = weight / (height * height);

    res.send("The BMI is: " + bmi);

});



app.listen(3000, function() {
    console.log("server started on port 3000");
});