function openPopup() {
    document.querySelector("#know-more-popup").style.height = "100%";
    document.querySelector("#know-more-popup").style.transition = "0.3s";
}

function closePopup() {
    document.querySelector("#know-more-popup").style.height = "0%";
}

var n = localStorage.getItem('on_load_counter');

if (n === null) {
    n = 0;
}

n++;

localStorage.setItem("on_load_counter", n);

document.getElementById('CounterVisitor').innerHTML = 'You have visited this site: ' + n + ' time(s)';
n + ' time(s)';