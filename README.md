# Analog Clock

This is a basic analog clock built using HTML, CSS, and JavaScript. The clock hands (hour, minute, and second) rotate based on the current system time, providing a real-time display of the clock.

## Project Structure

├── index.html # The main HTML file ├── style.css # CSS file for styling ├── script.js # JavaScript file to control the clock hands rotation ├── clock.png # Background image of the clock face └── README.md # This readme file


## How It Works

- **HTML**: The clock structure is created using `div` elements for the clock hands (`#hour`, `#minute`, `#second`) wrapped in a `#clock-container` that serves as the background image.
- **CSS**: The clock face is styled using CSS. The hands are absolutely positioned on the face, and their rotation is handled dynamically using JavaScript.
- **JavaScript**: A `setInterval()` function is used to update the hands' positions every second, based on the system time retrieved using the JavaScript `Date()` object.

## How to Use

1. Clone or download the repository.
2. Place all the files (including `clock.png`) in the same directory.
3. Open `index.html` in your browser to see the analog clock in action.

## Clock Components

- `#clock-container`: This `div` contains the clock hands and serves as the background, using an image of a clock face (`clock.png`).
- `#hour`: The hour hand of the clock.
- `#minute`: The minute hand of the clock.
- `#second`: The second hand of the clock.

## Customization

- You can replace the `clock.png` file with your own clock face image.
- The dimensions of the clock and its hands can be adjusted by modifying the corresponding CSS rules in `style.css`.
  
## JavaScript Functionality

In `script.js`, the clock updates every second using the following logic:

```javascript
setInterval(() => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const seconds = date.getSeconds();

    let hourRotation = 30 * hour + minute / 2;
    let minuteRotation = 6 * minute;
    let secondsRotation = 6 * seconds;

    const hourHand = document.getElementById('hour');
    const minuteHand = document.getElementById('minute');
    const secondHand = document.getElementById('second');

    hourHand.style.transform  = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform  = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform  = `rotate(${secondsRotation}deg)`;
}, 1000);
```

## Requirements
- Any modern web browser (Google Chrome, Firefox, Edge, etc.

## Credits

- Background clock image: clock.png
- Developed by MD Arifin Hasan Ratul

### Instructions:
- Replace `clock.png` with your own clock face image if needed.
- Make sure to add your own name and license details under the relevant sections.

This `README.md` will provide clear information on how the project works and how to get it running.
