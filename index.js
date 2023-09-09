let numbers = ""
let stringNumbers = ''


function calculate(element) {
    numbers += element
    console.log(numbers);
    
    document.querySelector('.js-calculaton').innerHTML = numbers

}

function cal() {
   let calculated = eval(numbers)
    console.log(calculated);

        reset()

    document.querySelector('.js-calculaton').innerHTML = calculated

}

function reset() {
    numbers = ''
    console.log(numbers);
    document.querySelector('.js-calculaton').innerHTML = `Resoult`
}

if (KeyboardEvent === 'Enter') {
    cal()
}
