// Question # 1
document.getElementById("question").innerText = "Question 1 starts here,";
var posInteger = prompt("Enter any Positive integer number");
document.getElementById("integer1").innerText  = "Number: " + posInteger;
var round1 = Math.round(posInteger);
document.getElementById("integer2").innerText  = "Round off value: " + round1;
var floor1 = Math.floor(posInteger);
document.getElementById("integer3").innerText  = "Floor value: " + floor1;
var ceil1 = Math.ceil(posInteger);
document.getElementById("integer4").innerText  = "Ceil value: " + ceil1;


// Question # 2
document.getElementById("question2").innerText = "Question 2 starts here,";
var negInteger = prompt("Enter any Negative integer number");
document.getElementById("integer5").innerText  = "Number: " + negInteger;
var round2 = Math.round(negInteger);
document.getElementById("integer6").innerText  = "Round off value: " + round2;
var floor2 = Math.floor(negInteger);
document.getElementById("integer7").innerText  = "Floor value: " + floor2;
var ceil2 = Math.ceil(negInteger);
document.getElementById("integer8").innerText  = "Ceil value: " + ceil2;


// Question # 3
document.getElementById("question3").innerText = "Question 3 starts here,";
var floatInteger = prompt("Enter any Float number");
document.getElementById("integer9").innerText  = "Number: " + floatInteger;
var round3 = Math.round(floatInteger);
document.getElementById("integer10").innerText  = "Round off value: " + round3;
var floor3 = Math.floor(floatInteger);
document.getElementById("integer11").innerText  = "Floor value: " + floor3;
var ceil3 = Math.ceil(floatInteger);
document.getElementById("integer12").innerText  = "Ceil value: " + ceil3;


// Question # 4
document.getElementById("question4").innerText = "Question 4 starts here,";
var floatNegInteger = prompt("Enter any Float Negative number");
document.getElementById("integer13").innerText  = "Number: " + floatNegInteger;
var round4 = Math.round(floatNegInteger);
document.getElementById("integer14").innerText  = "Round off value: " + round4;
var floor4 = Math.floor(floatNegInteger);
document.getElementById("integer15").innerText  = "Floor value: " + floor4;
var ceil4 = Math.ceil(floatNegInteger);
document.getElementById("integer16").innerText  = "Ceil value: " + ceil4;






//Question # 5
document.getElementById("question5").innerText = "Question 5 starts here,";
var absolute = parseFloat(prompt("Type any number"));

var convert = Math.abs(absolute);

document.getElementById("absolute").innerHTML = "<p><li> absolute Number of "+absolute+ " is " + convert + "</li></p>";




//Question # 6
document.getElementById("question6").innerText = "Question 6 starts here,";
function dice(){
var dice1 = Math.random() * 6;

var dice2 = Math.round(dice1);
document.getElementById("dice").innerText = "Random dice value is " + dice2 , "<br>";
}


//Question # 7
document.getElementById("question7").innerText = "Question 7 starts here,";

function headtail(){
    var htrandom = Math.random() * 1;

    var htround = Math.round(htrandom);
    if(htround == 0){
    document.getElementById("ht").innerText = " Head it is"
}
else{
    document.getElementById("ht").innerText = " Tail it is"
}
}




//Question # 8
document.getElementById("question8").innerText = "Question 8 starts here,";

var rnum = Math.random() * 100;
var roundnum = Math.round(rnum);
document.getElementById("rnum").innerText = " Random number between 0 to 100 is "+ roundnum ;



//Question # 9
document.getElementById("question9").innerText = "Question 9 starts here,";

var srandom = Math.random() * 10;

var srouund = Math.round(srandom);

var secretnumber = parseInt(prompt("Type any number between 0 to 10"));

if(secretnumber == srouund){
    alert("You win, the number is correct")
}
else{
    alert("Try Again, the number you have entered is not match. Correct number was " + srouund)
}

//Question # 10
var secNum = parseInt(prompt("Enter/Guess a Number from 1 to 10"));
if (secNum === 5) {
   alert("Congratulations! Correct Guess");
} 
else if (secNum === 4) {
   alert("Near to correct guess, Nice try");
}
else if (secNum === 6) {
    alert("Near to correct guess, Nice try");
}
else {
    alert("Wrong Guess, Try Again, Better luck next time");
}


//Question # 11
var cTime = new Date();
document.getElementById("CurrentDateTime").innerText = cTime;



var dates = new Date();

document.getElementById("dates").innerText =  dates ;



var months = ["January", "February", "March", "April", "May", "June", "July", "August", "Spetember", "October", "November", "December"];    

var month = dates.getMonth();

document.getElementById("month").innerText = "\r\n Current Month: " + months[month] + "\r\n" ;



var day = dates.getDay();
var days = ["Sun","Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

alert("today is "+days[day]);



if(days[day] === "Sun" || days[day] === "Sat"){
    alert("Today is a Funday")
}
else{
    alert("Today is a Working Day")     
}



var hour = dates.getHours();
console.log(hour);
if(hour < 12){
    document.getElementById("hour").innerText = "\r\n" + "It's AM" +   "\r\n"
}
else{
    document.getElementById("hour").innerText =  "\r\n" + "It's PM"+   "\r\n"
}



var age = prompt("Enter your age");

var year = dates.getFullYear();

var birthYear = year - age ;

document.getElementById("age").innerText = "Your Age is: " + age;

document.getElementById("bYear").innerText = "Your Birth year is " + birthYear;



function bill() {
    var name = document.getElementById("name").value;
    var month = document.getElementById("month").value;
    var nou = document.getElementById("nou").value;
    var cpu = document.getElementById("cpu").value;
    var late = 200;

    if (name == "" || month == "" || nou == "" || cpu == "") {
        alert("Enter all information first");
    }
    else {
        var net = nou * cpu;
        document.getElementById("net").innerHTML = "<p> Net Amount Payable (Within Due Date) " + net + "</p>";
        document.getElementById("late").innerHTML = "<p> Late Payment Charges " + late + "</p>";
        var gross = net + late;
        document.getElementById("gross").innerHTML = "<p> Gross Amount Payable(After Due Date) " + gross;

    }

}
