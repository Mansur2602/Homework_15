function compareNumbers(num1, num2) {
    if (num1 < num2) 
        {
        return -1
    } else if (num1 > num2) 
        {
        return 1
    } else 
    {
        return 0
    }
}


first_number = +prompt("Введите первое число")
second_number = +prompt("Введите второе число")

alert(compareNumbers(first_number,second_number))
