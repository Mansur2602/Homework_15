function factorial(n) {
    if (n < 0) {
        return "Число отрицательное!"
    } else if (n === 0 || n === 1) {
        return 1
    } else {
        let result = 1
        for (let i = 2; i <= n; i++) {
            result *= i
        }
        return result;
    }
}

number = +prompt("Введите число")

alert(factorial(number))