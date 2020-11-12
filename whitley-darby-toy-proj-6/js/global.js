window.addEventListener("load",function() {
    const grid = document.getElementsByClassName(".grid-container");

    var squares = document.querySelectorAll('.square');

    function changeColor(e) {
        var square = e.target;
        square.dataset.hovered = true;
    }

    squares.forEach(function(square) {
        square.addEventListener('mouseover', changeColor);

        
    });

    // function removeElement(square) {
    //     if (document.getElementById)
    //     square.dataset.hovered = true;
    // }

    // squares.forEach(function(square) {
    //     square.addEventListener('click', remove);


    


})