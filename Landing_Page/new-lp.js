var modal = document.getElementById("modal");

var btn = document.getElementById("m-btn");
var btn2 = document.getElementById("m-btn2");
var btn3 = document.getElementById("m-btn3");

var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
    modal.style.display = "block";
    document.getElementById("th3").innerHTML = "Doktora Danışın"
    document.getElementById("tp").innerHTML = "Tedavi hakkında doktordan bilgi almak için hemen formu doldurun!"
}
btn2.onclick = function() {
    modal.style.display = "block";
    document.getElementById("th3").innerHTML = "Fiyat Alın"
    document.getElementById("tp").innerHTML = "Tedavi hakkında fiyat bilgisi almak için hemen formu doldurun!"
}
btn3.onclick = function () {
    modal.style.display = "block";
    document.getElementById("th3").innerHTML = "Öncesi-Sonrası Görüntüleri Talep Edin"
    document.getElementById("tp").innerHTML = "Öncesi-Sonrası fotoğraflarını talep etmek için hemen formu doldurun!"
}
span.onclick = function(){
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//Collapsible Questions
let coll = document.querySelectorAll(".collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");

        let content = this.nextElementSibling;
        let el = this.querySelector("i");

        if (content.style.display === "block") {
            content.style.display = "none";
            el.style.webkitTransform = "rotate(0deg)"
        }
        else {
            content.style.display = "block";
            el.style.webkitTransform = "rotate(180deg)"
        }
    });
}

