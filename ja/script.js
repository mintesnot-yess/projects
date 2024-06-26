var row = false;

function change_list() {
    if (row === true) {
        document.querySelector(".card-container").style.flexDirection = 'column';
        row = false;
    } else {
        document.querySelector(".card-container").style.flexDirection = 'row';
        row = true;
    }

}
change_list()