function combineNumbers(a, b,c) {
    
    return (`${a}${b}${c}`)
}


first_number = +prompt("Введите первое число")
second_number = +prompt("Введите второе число")
third_number = +prompt("Введите третье число")

alert(combineNumbers(first_number,second_number,third_number))