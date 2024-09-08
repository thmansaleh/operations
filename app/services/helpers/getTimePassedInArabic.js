export function getTimePassedInArabic(date1, date2) {
    const secondsInMinute = 60;
    const minutesInHour = 60;
    const hoursInDay = 24;

    // Ensure date1 is earlier than date2
    if (date1 > date2) {
        [date1, date2] = [date2, date1];
    }

    const diffInSeconds = Math.floor((date2 - date1) / 1000);

    const days = Math.floor(diffInSeconds / (secondsInMinute * minutesInHour * hoursInDay));
    const hours = Math.floor((diffInSeconds % (secondsInMinute * minutesInHour * hoursInDay)) / (secondsInMinute * minutesInHour));
    const minutes = Math.floor((diffInSeconds % (secondsInMinute * minutesInHour)) / secondsInMinute);
    const seconds = diffInSeconds % secondsInMinute;

    let result = '';

    if (days > 0) {
        result += `${days} يوم${days > 1 ? '' : ''} `;
    }
    if (hours > 0) {
        result += `${hours} ساعة${hours > 1 ? 'ات' : ''} `;
    }
    if (minutes > 0) {
        result += `${minutes} دقيقة${minutes > 1 ? 'ات' : ''} `;
    }
    if (seconds > 0) {
        result += `${seconds} ثانية${seconds > 1 ? '' : ''} `;
    }

    return result.trim() || 'لا يوجد وقت';
}
