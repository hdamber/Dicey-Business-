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
        this.div.addEventListener('click', () => this.roll());
    }
    
    roll() {
        let result = Math.floor((Math.random() * 6) + 1)
        this.value = result
        this.div.innerHTML = this.value
    }

}


buttonAdd.addEventListener('click', function () {
    new Die();
    counter++
})

btnR.addEventListener('click', () => {
    diceArr.forEach(die => {
        die.roll();
    })
})