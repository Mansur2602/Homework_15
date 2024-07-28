
function calculateArea(length, width) { 
    if (isNaN(length) || length <= 0) {
        return "Длина должна быть положительным числом."
    }

    if (width === undefined || isNaN(width) || width <= 0) { 
        return length * length
    } else { 
        return length * width
    } 
} 

let length = +prompt("Введите длину"); 
let width = +prompt("Введите ширину (оставьте пустым для квадрата)") 

alert(calculateArea(length, width));
