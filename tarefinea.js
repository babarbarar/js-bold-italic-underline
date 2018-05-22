
var target = document.getElementById("textbox");
var result = document.getElementById('resultbox');
var array = [document.getElementById("b"), document.getElementById("i"), document.getElementById("u")];

array.forEach(function(element) {
    element.addEventListener("click", function() {
        if (element.classList.contains("active"))
          element.className = " btn btn-default ";
        else
          this.className += " active ";
    });
});

document.getElementById("aplicar").addEventListener("click", function(){
    result.className = "";
    if (document.getElementById("b").classList.contains("active"))
        result.className += " bold ";
    if (document.getElementById("i").classList.contains("active"))
        result.className += " italic ";
    if (document.getElementById("u").classList.contains("active"))
        result.className += " underline ";

    result.innerHTML = target.value;
    target.value = "";
});
