 export function generateRandomReportNumber() {
    const currentYear = new Date().getFullYear().toString().slice(-2);
    const randomNumber = Math.floor(Math.random() * Math.pow(10, 8)).toString().padStart(8, '0');
    return `${currentYear}${randomNumber}`;
}


