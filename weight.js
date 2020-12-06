function mydate() {
    //alert("");
    document.getElementById("dt").hidden = false;
    document.getElementById("ndt").hidden = true;
}

function mydate1() {
    d = new Date(document.getElementById("dt").value);
    dt = d.getDate();
    mn = d.getMonth();
    mn++;
    yy = d.getFullYear();
    document.getElementById("ndt").value = dt + "/" + mn + "/" + yy
    document.getElementById("ndt").hidden = false;
    document.getElementById("dt").hidden = true;
}

function validDate() {
    var today = new Date();
    var maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 0);

    document.getElementsByName("date")[0].setAttribute('max', getInputDateFormat(maxDate));
}

var row = 0;

var add = document.getElementById("add");
add.addEventListener("click", displayDetails);

function displayDetails() {
    var date = document.getElementById("date").value;
    var weight = document.getElementById("weight").value;

    if (!date || !weight) {
        return;
    }

    var display = document.getElementById("display");

    var newRow = display.insertRow(row);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);

    cell1.innerHTML = weight;
    cell2.innerHTML = date;

    row++;
}


function getInputDateFormat(date) {
    return date.toISOString().split('T')[0];
}



var weight = document.getElementById("weight").value;
var result;

result = weight.slice(0, 3) + '...';