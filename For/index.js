for (var i = 1; i <= 10; i++) {
    if (i == 6) {
        continue
    } else {
        console.log(i);
    }
}

for (var v = 1; v <= 10; v++) {
    if (v == 6) {
        break
    } else {
        console.log(v);
    }
}



for (var a = 1; a <= 10; a++) {

    for (var b = 1; b <= 10; b++) {
        document.write("*")
    }

    document.write("<br>")
}


for (var c = 1; c <= 10; c++) {

    for (var d = c; d <= 10; d++) {
        document.write("*")
    }

    document.write("<br>")
}



for (var e = 1; e <= 10; e++) {

    for (var f = e; f >= 1; f--) {
        document.write("*")
    }

        document.write("<br>")
}