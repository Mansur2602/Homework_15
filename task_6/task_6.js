function isPerfectNumber(num) {
    if (num <= 0) {
        return "Отрицательное число!"
    }

    else{

    
    let sum = 0

    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i
        }
    }

    return sum === num
}
}

function findPerfectNumbersInRange(min, max) {
    let perfectNumbers = []

    for (let i = min; i <= max; i++) {
        if (isPerfectNumber(i)) {
            perfectNumbers.push(i)
        }
    }

    return perfectNumbers;
}

let min = +prompt("Введите минамальный диапазон")
let max = +prompt("Введите максимальный диапазон")

alert(findPerfectNumbersInRange(min,max))
