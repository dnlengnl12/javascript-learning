var score1 = 0;
var score2 = 200;
var defulatScore = 0;
function outer() {
    var score;
    score = 30;
    var _loop_1 = function (i) {
        setTimeout(function () {
            console.log(i);
        }, 100);
    };
    for (var i = 0; i < 3; i++) {
        _loop_1(i);
    }
}
outer();
//# sourceMappingURL=variables.js.map