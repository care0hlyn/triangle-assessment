







$(document).ready(function(){
  $('form#form-group').submit(function(event){
    event.preventDefault();


var side1 = parseInt($('input#side-one').val());
var side2 = parseInt($('input#side-two').val());
var side3 = parseInt($('input#side-three').val());


var triangle = { sideOne: side1,
                 sideTwo: side2,
                 sideThree: side3,
                 type: function () {
                  if ((((this.sideOne + this.sideTwo) < this.sideThree) || ((this.sideTwo + this.sideThree) < this.sideOne) || ((this.sideThree + this.sideTwo) < this.sideOne))) {
                  return "NOT A TRIANGLE";
                } else if (this.sideOne === this.sideTwo && this.sideOne === this.sideThree) {
                  return "EQUILATERAL";
                } else if (this.sideOne === this.sideThree || this.sideTwo === this.sideOne || this.sideThree === this.sideTwo) {
                  return "ISOCELES";
                } else if ((this.sideOne !== this.sideTwo && this.sideOne !== this.sideThree) && (this.sideTwo !== this.sideThree)) {
                  return "SCALENE";
                } else {
                  return false;
                  }
                 } // ending bracket for the function
              } // ending bracket for the entire object



    if (triangle.type() === "NOT A TRIANGLE") {
      alert("Not a triangle!");
    } else if(triangle.type() === "EQUILATERAL") {
      return $('#equal').append("<li>" + side1 + ", " + side2 + ", " + side3 + "</li>");
    } else if(triangle.type() === "ISOCELES") {
      return $('#two-sides').append("<li>" + side1 + ", " + side2 + ", " + side3 + "</li>");
    } else if (triangle.type() === "SCALENE") {
      return $("#none").append("<li>" + side1 + ", " + side2 + ", " + side3 + "</li>")
    } else {
      return false;
    }



  }); //This closes submit button function
}); // This closes jQuery
