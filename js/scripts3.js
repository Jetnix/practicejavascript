

var gal = function (){
  return prompt ("How many gallons? ");
};
var gallons = gal();
var conv = function(gallons){
  return(gallons*3.78541);
}
var liters = conv(gallons);
alert (liters);
