function secondsToTimeString(totalSeconds) {
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    return String(hours).padStart(2, '0') + ':' +
           String(minutes).padStart(2, '0') + ':' +
           String(seconds).padStart(2, '0');
}

function dateDifferenceInSeconds(year1, month1, day1, hour1, minute1, second1,
                                 year2, month2, day2, hour2, minute2, second2) {

    let date1InSeconds = Date.UTC(year1, month1 - 1, day1, hour1, minute1, second1) / 1000;
    let date2InSeconds = Date.UTC(year2, month2 - 1, day2, hour2, minute2, second2) / 1000;


    let differenceInSeconds = Math.abs(date2InSeconds - date1InSeconds)

    return differenceInSeconds
}


let diffInSeconds = dateDifferenceInSeconds(2023, 10, 1, 12, 0, 0, 2023, 10, 3, 14, 30, 30)
alert(`Разница в секундах: ${diffInSeconds}`)


let timeString = secondsToTimeString(diffInSeconds)
alert(`Разница в формате чч:мм:сс: ${timeString}`)
