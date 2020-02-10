const container = document.createElement('main');
container.className = 'container';
let btnA = document.getElementById('buttonAdd');
let btnR = document.getElementById('buttonRoll');
let btnS = document.getElementById('buttonSum');
document.body.appendChild(container);
let counter = 0;
let diceArr = [];


class Die {
    constructor(value) {
        this.div = document.createElement('div');
        this.value = value
        this.div.className = 'box';
        this.div.id = counter;
        this.roll()
        diceArr.push(this)
        container.appendChild(this.div);
        this.div.addEventListener('click', () => this.roll());  //click event on die that rolls only that die
        
        //double click event that removes a dice on a double click
        this.div.addEventListener('dblclick', () => {
            const index = diceArr.indexOf(this);
            if (index > -1) {
                diceArr.splice(index, 1);
            }
            container.removeChild(this.div);
        })

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



//click event that alerts the sum of the die on the page
btnS.addEventListener('click', () => {
    let sum = 0;
    diceArr.forEach(die => {
        sum = sum + die.value;

    })

    alert(sum);
})