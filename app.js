let Gpio;
try {
    Gpio = require('pigpio').Gpio;
    console.log("Gpio imported successfully.");
} catch (error) {
    console.error("Failed to import Gpio:", error);
}

console.log("Starting...")

// List of GPIOs you want to toggle
const gpios = [5, 6, 23, 24, 25, 26].map(pin => new Gpio(pin, {mode: Gpio.OUTPUT}));

let value = 0;
setInterval(() => {
    // Log the current action
    console.log(`Toggling GPIOs to ${value === 0 ? 'OFF' : 'ON'}`);

    // Toggle each GPIO in the list
    gpios.forEach(led => {
        led.digitalWrite(value);
        console.log(` - GPIO ${led.gpio} set to ${value === 0 ? 'LOW' : 'HIGH'}`);
    });

    value = value === 0 ? 1 : 0; // Toggle between 0 and 1
}, 4000); // Toggle every 4 seconds
