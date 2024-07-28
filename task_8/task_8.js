function timeToSeconds(hours, minutes, seconds) {

    return (hours * 3600) + (minutes * 60) + seconds
}

hours = +prompt("Введите часы")
minutes = +prompt("Введите минуты")
seconds = +prompt("Введите секунды")

alert(timeToSeconds(hours,minutes,seconds))