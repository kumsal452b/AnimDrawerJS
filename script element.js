var toggledMenu = document.getElementById("menu-toggle");
var activeElements = document.getElementById(".active-element");

var toggledMenu = toggledMenu.addEventListener("click", function () {
    // forEach is not supported in IE11
    // activeElements.forEach(function(e){
    //     e.classList.toggle("active");
    // });
    for (var activated = 0; activated < activeElements.length; activated++) {
        activeElements[activated].classList.toggle("active");
    }
})