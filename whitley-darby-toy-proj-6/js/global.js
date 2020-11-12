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
    
	$('button').click(function(){
		$('#toy-body').addClass("shake shake-constant shake-slow");
		setTimeout(function(){
			$('#toy-body').removeClass("shake shake-constant shake-slow");
		}, 1200);
		$('.grid-container').empty();
	});

	$('#shake').click(function(){
        buildEtch(size);
    });


})