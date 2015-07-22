app.factory('SnapFactory', function() {
    console.log('I EXIST')
    return {
        createCircle: function() {
            console.log("I'M RUNNING, YO!!!");

            var s = Snap("#svg");
            var bigCircle = s.circle(150, 150, 100);
            bigCircle.attr({
                fill: "#bada55",
                stroke: "#000",
                strokeWidth: 5
            });

        }
    }
})