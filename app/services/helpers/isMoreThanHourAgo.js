 export function isMoreThanHourAgo(date) {
    const givenDate = new Date(date);
    const currentDate = new Date();
    const oneHourInMs = 60 * 60 * 1000; // 1 hour in milliseconds
  
    // Check if the given date is more than 1 hour ago
    return (currentDate - givenDate) > oneHourInMs;
  }