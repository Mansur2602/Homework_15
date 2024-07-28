function formatTime(hours, minutes = 0, seconds = 0) {
 
    const formattedHours = String(hours).padStart(2, '0')
    const formattedMinutes = String(minutes).padStart(2, '0')
    const formattedSeconds = String(seconds).padStart(2, '0')


    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`

}


hours = +prompt("Введите часы")
minutes = +prompt("Введите минуты")
seconds = +prompt("Введите секунды")

alert(formatTime(hours,minutes,seconds))