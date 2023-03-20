$('body').append("<button id= 'dieButton'>Generate Die</button>");
$('body').append("<button id= 'rollButton'>Roll Dice</button>");
//optional
$('body').append("<button id= 'sumButton'>Sum Dice</button>");
$('body').append("<div id= 'grid'></grid>");
var dieCount = 1;
var dice = [];
var Die = /** @class */ (function () {
    function Die() {
        var _this = this;
        this.$die = $("<div class = 'die' id = ".concat(dieCount, "></div>"));
        $('#grid').append(this.$die);
        dieCount++;
        this.value = this.roll();
        this.$die.text(this.value);
        dice.push(this);
        //optional
        this.$die.click(function () {
            var rerollOnce = _this.roll();
            _this.$die.text(rerollOnce);
            var diceIndex = dice.indexOf(_this);
            dice[diceIndex].value = rerollOnce;
        });
        //optional
        this.$die.dblclick(function () {
            dice.splice(dice.indexOf(_this), 1);
            _this.$die.remove();
        });
    }
    Die.prototype.roll = function () {
        return Math.floor(Math.random() * 6) + 1;
    };
    return Die;
}());
$(dieButton).click(function () {
    var eachDie = new Die();
    $('#grid').append(eachDie.$die);
});
$(rollButton).click(function () {
    for (var i = 0; i < dice.length; i++) {
        var reroll = dice[i].roll();
        dice[i].$die.text(reroll);
        dice[i].value = reroll;
    }
});
//optional
$(sumButton).click(function () {
    var addEmUp = function (a, b) {
        return a + b.value;
    };
    alert(dice.reduce(addEmUp, 0));
});
