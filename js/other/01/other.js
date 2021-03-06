window.onload = function(){
    createTable();
    toggle();
}

function createTable() {
    var container = document.getElementById("container");
    for (var i = 1; i <= 9; i++) {
        var line = document.createElement("div");
        line.className = "line";
        for (var j = 1; j <= i; j++) {
            var cell = document.createElement("div");
            cell.className = "cell";
            cell.innerText = j + '*' + i + '=' + i * j;
            line.appendChild(cell);
        }
        container.appendChild(line);
    }
};


var cells = document.getElementsByClassName("cell");
var timer, i = 0,
    flag = false;

function toggle() {

    if (i == 0 && flag) {

        clearTimeout(timer);
        for (i; i < cells.length; i++) {
            cells[i].style.opacity = 1;
        }
        return;
    }

    cells[i].style.opacity = flag ? 0 : 1;
    flag ? i-- : i++;

    if (i == cells.length) {
        flag = true;
        i--;
    }
    timer = setTimeout(toggle, 100);
}