setInterval(() => {
    const date = new Date();
    const hour = date.getHours();  // Corrected 'd' to 'date'
    const minute = date.getMinutes();  // Corrected 'd' to 'date'
    const seconds = date.getSeconds();  // Corrected 'd' to 'date' and fixed typo 'getSecunds' to 'getSeconds'

    // Calculation Part
    let hourRotation = 30 * hour + minute / 2;
    let minuteRotation = 6 * minute;
    let secondsRotation = 6 * seconds;

    // Get the clock hands by their IDs
    const hourHand = document.getElementById('hour');
    const minuteHand = document.getElementById('minute');
    const secondHand = document.getElementById('second');

    // Apply the rotations
    hourHand.style.transform  = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform  = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform  = `rotate(${secondsRotation}deg)`;
}, 1000);
