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
var c = Minus(10, 6);
console.log(c);

// Self Invoke
(function () {
  // alert("Loaded ...");
})();

// Arrow Function
var sum2 = (a, b) => a + b;
const sum3 = (x, y) => {
  return x * y;
};
alert(sum2(7, 8));

function Sum4(x, y) {
  if (x === undefined) {
    x = 0;
  }
  if (y === undefined) {
    y = 0;
  }
  return x + y;
}
function Sum5(x = 1, y = 1) {
  return x + y;
}

// Arguments
function MyFunction1() {
  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
MyFunction1(4, "Nila", true);

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

// This (Owner)
var firstName = "Hana";
var personName = {
  firstName: "Iman",
  FullName: function () {
    return this.firstName;
  },
};

// Let (Inner Access)
let x = 12;
{
  let x = 15;
  alert(x);
}
alert(x);

// Const (No Change)
const Price = 25000;

// Debug
debugger;

// Validation
function MyFunction() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Please Enter Name ");
    return false;
  }
}

// Constructor
function Person(name, family, age) {
  this.name = name;
  this.age = age;
  this.fullName = function () {
    return this.name;
  };
}
var iman = new Person("iman", 20);
console.log(iman.fullName());

// DOM = Document Object Model