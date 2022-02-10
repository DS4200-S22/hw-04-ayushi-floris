function changeVisibility() {
    const opacity = parseInt(document.getElementById('c3').style.opacity);

    if (opacity == 0) {
        document.getElementById('c3').style.opacity = "100%";
    } else {
        document.getElementById('c3').style.opacity = "0%";
    }
}

function showBorder() {
    document.getElementById('c2').style.strokeWidth = 5;
}

function hideBorder() {
    document.getElementById('c2').style.strokeWidth = 0;
}