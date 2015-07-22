app.factory('QuokkaFactory', function() {
    return {
        moveQuokka: function() {
            $('body').keyup(function(event) {
                console.log(event.keyCode);
                if (event.keyCode == 37) { //left
                    console.log('hit left button, yo');
                    $('img').animate({
                        'left': '-=200'
                    });
                } else if (event.keyCode == 38) { //up
                    $('img').animate({
                        'top': '-=200'
                    })
                } else if (event.keyCode == 39) { //right
                    console.log('hit right button, yo');
                    $('img').animate({
                        'left': '+=200'
                    })
                } else if (event.keyCode == 40) { //down
                    $('img').animate({
                        'top': '+=200'
                    })
                }
            })
        }
    }
})