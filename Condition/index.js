var a = 1
var b = 2
var c = 3
var d = 4
var e = 5

var opt = "+"

if(false) {
    console.log("if")
}
else if (true) {
    console.log("else if")
}
else {
    console.log("else")
}


// تمرین
var f = 5
var g = 10

var opt = "-"

if (opt == "+") {
    console.log( ":حاصل جمع", f + g)
}
else if(opt == "-"){
    console.log(":حاصل تفریق", f - g)
}
else if(opt == "*"){
    console.log(":حاصل ضرب" , f * g)
}
else if(opt == "/"){
    console.log(":حاصل تقسیم" , f / g)
}
else {
    console.log("عملگر وارد شده درست نیست")
}