// Variable
var Name = "Nila Vosoughzadeh";
alert(Name);
var Number = 20;
var IsExist = true;
alert(typeof IsExist);

// Function
function sumAlert() {
  var x = 150;
  var y = 200;
  var c = x + y;
  alert(c);
}
function Minus(x, y) {
  return x - y;
}

// Arrays
var Names = ["Vousi", "Ahmz", "Shvi"];
var Names2 = Names.sort();
console.log(Names2);
// document.write(Names.length);
// document.write(Names[0]);
var myArray = new Array("Nila", "Mina", "Tina");
// document.write(myArray[2]);

// + - * / % ++ -- -= += , ...

var lbl = document.getElementById("lblResult");
lbl.innerHTML = "Hi";

// Object
var person = {
  Name: "Mona",
  Age: 10,
};

// Event
function ShowDate() {
  document.getElementById("lblResult").innerHTML = Date();
}

// If Else - && ||
a = 5;
if (a > 8) {
  alert("true");
} else if (a == 0) {
  alert("Oh");
} else {
  alert("false");
}

// Switch Case
var b = 2;
switch (b) {
  case 1:
    break;
  case 2:
  case 3:
    break;
  default: {
    break;
  }
}

// for
var text = "";
for (var i = 0; i <= Names.length; i++) {
  text += Names[0] + "<br/>";
}
for (n in Names) {
  document.writeln(Names[n]);
}

// While
whileTxt = 1;
while (1 >= 5) {
  document.writeln(whileTxt);
  whileTxt++;
}

// Do While
do {
  document.writeln(whileTxt);
  whileTxt++;
} while (i > 2);

// Try Catch Finally
try {
} catch {
} finally {
}

// Throw "text";
