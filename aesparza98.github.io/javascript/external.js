//document.write("Where is my JS code?");
//window.alert(5 + 6);
//window.alert('5 + 6');
//document.write('<hl>A heading</hl>');
//document.write('<p>A sentence.</p>');
/*const x = "web";
const y = "mapping";
const out = x + y;
document.write(out);*/

//A prompt box is used to prompt users to input a value before entering a page.
/*user_name = window.prompt("Please enter your name","Type your name here");
document.write(user_name);*/

/* Remove this tag for excercise 2 to run

// there are many ways to use the prompt feature
sign = window.prompt(); // open the blank prompt window
sign = prompt(); // open the blank prompt window
sign = window.prompt('Are you feeling lucky'); // open the window with Text "Are you feeling lucky"
sign = window.prompt('Are you feeling lucky','sure'); /*
open the window with Text "Are you feeling lucky" and default
value "sure"*/

/* Remove this tag for excercise 3 to run
// A prompt box is used to prompt users to input a value before entering a page
user_name = window.prompt("Please enter your name", "Type your name here");
document.write(user_name);
*/

//Operators
/*x = 22;
const y =33;
document.writeln(x + y) ;
document.writeln("<br>");
document.writeln(x += 33);
*/

/*document.writeln("<button onclick='condition()'>Conditional Test</button>")
function condition()
{
 x = confirm("Are you sure you want to proceed?");
 if(x)
 {
 document.writeln("You chose Okay!");
 }
 else
 {
 document.writeln("You chose Cancel!");
 }
}*/

/*arr = ["Joe","April","Mark","Sara"];

for (var i=0; i < arr.length; i++)
{
 document.writeln(arr[i],"<br>");
}*/

function welcome()
{
  let a = "Please enter your name.";
  let b = "Type your name here.";

//A prompt box is used to prompt users to input a value before entering a page
user_name = window.promp(a,b);

message = "<h1>Hello, welcome to my webpage," + user_name + "!</h1>"

return message
}
document.write(welcome());
