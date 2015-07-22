app.config(function($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        controller: 'HomeCtrl'
    });
});

app.controller('HomeCtrl', function($scope, SnapFactory) {
    console.log('i am a noob')
    // var createCircle = function() {
    //     console.log("I'M RUNNING, YO!!!");

    //     var s = Snap("#svg");
    //     var bigCircle = s.circle(150, 150, 100);
    //     bigCircle.attr({
    //         fill: "#bada55",
    //         stroke: "#000",
    //         strokeWidth: 5
    //     });

    // }

    // createCircle();

    SnapFactory.createCircle();
});