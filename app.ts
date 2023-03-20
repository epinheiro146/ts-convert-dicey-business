$('body').append(`<button id= 'dieButton'>Generate Die</button>`);

$('body').append(`<button id= 'rollButton'>Roll Dice</button>`);

//optional
$('body').append(`<button id= 'sumButton'>Sum Dice</button>`);

$('body').append(`<div id= 'grid'></grid>`);

let dieCount: number = 1;

let dice: Die[] = [];

class Die {

    public $die: JQuery<HTMLElement>;
    public value: number;

    constructor() {
        this.$die = $(`<div class = 'die' id = ${dieCount}></div>`);
        $('#grid').append(this.$die);
        dieCount++;
        this.value = this.roll();
        this.$die.text(this.value);
        dice.push(this);

        //optional
        this.$die.click(() => {
            let rerollOnce = this.roll();
            this.$die.text(rerollOnce);
            let diceIndex = dice.indexOf(this);
            dice[diceIndex].value = rerollOnce;
        })
        //optional
        this.$die.dblclick(() => {
            dice.splice(dice.indexOf(this), 1);
            this.$die.remove();
        })
    }

    roll() {
        return Math.floor(Math.random() * 6) + 1;
    }
}

$(dieButton).click(() => {
    let eachDie = new Die();
    $('#grid').append(eachDie.$die);
})

$(rollButton).click(() => {
    for (let i = 0; i < dice.length; i++) {
        let reroll = dice[i].roll();
        dice[i].$die.text(reroll);
        dice[i].value = reroll;
    }
})

//optional
$(sumButton).click(() => {
    let addEmUp = (a: number, b: Die) => {
        return a + b.value;
    }
    alert(dice.reduce(addEmUp, 0));
})