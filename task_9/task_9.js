function secondsToTime(totalSeconds) {

    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;


    let formattedTime = 
        String(hours).padStart(2, '0') + ':' +
        String(minutes).padStart(2, '0') + ':' +
        String(seconds).padStart(2, '0');

    return formattedTime
}


seconds = +prompt("Введите секунды")
alert(secondsToTime(seconds))