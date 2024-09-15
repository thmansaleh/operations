export function isMoreThanMinuteAgo(date) {
    const givenDate = new Date(date);
    const currentDate = new Date();
    const oneHourInMs =  6 * 1000; // 1 hour in milliseconds
  
    // Check if the given date is more than 1 hour ago
    return (currentDate - givenDate) > oneHourInMs;
  }