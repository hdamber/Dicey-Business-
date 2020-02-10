const container = document.createElement('main');
container.className = 'container';
let btnA = document.getElementById('buttonAdd');
let btnR = document.getElementById('buttonRoll');
let btnS = document.getElementById('buttonSum');
document.body.appendChild(container);
let counter = 0;
let diceArr = []


class Die {
    constructor(value) {
        this.div = document.createElement('div');
        this.value = value
        this.div.className = 'box';
        this.div.id = counter;
        this.roll()
        diceArr.push(this)
        container.appendChild(this.div);
        this.div.addEventListener('click', () => this.roll());  //click on die rolls only that die
    }
    

    roll() {
        let result = Math.floor((Math.random() * 6) + 1)
        this.value = result
        this.div.innerHTML = this.value
    }



}

// click event to add a new dice when the 'add die' button is clicked
btnA.addEventListener('click', function () {
    new Die();
    counter++
})

//click event to roll the dice(change numbers through the diceArr) when the 'roll dice' button is clicked
btnR.addEventListener('click', () => {
    diceArr.forEach(die => {
        die.roll();
    })
})
