function isPerfectNumber(num) {
 
    if (num <= 0) {
        return "Отрицательное число!"
    }
    else {

    
    let sum = 0

    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    return sum === num
}
}

number = +prompt("Введите число")

alert(isPerfectNumber(number))
