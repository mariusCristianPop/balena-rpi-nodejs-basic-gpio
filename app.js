const Gpio = require('pigpio').Gpio;
console.log('Starting');

var ledToggle = false;
var led23 = new Gpio(23, {mode: Gpio.OUTPUT}),
    led24 = new Gpio(24, {mode: Gpio.OUTPUT}),
    led25 = new Gpio(25, {mode: Gpio.OUTPUT});

console.log('LEDs initialized');

// Function to toggle the LEDs
const toggleLEDs = (state) => {
    console.log(`Toggling LEDs to ${state ? 'ON' : 'OFF'}`);
    led23.digitalWrite(state ? 1 : 0);
    led24.digitalWrite(state ? 1 : 0);
    led25.digitalWrite(state ? 1 : 0);
};

// Toggle the LEDs every 15 seconds
setInterval(function() {
    // Toggle the state
    ledToggle = !ledToggle;

    // Log the current state
    console.log(`LED state is now ${ledToggle ? 'ON' : 'OFF'}`);

    // Set the LEDs state
    toggleLEDs(ledToggle);
}, 15000); // 15000 milliseconds = 15 seconds

console.log('LED toggle interval set for every 15 seconds');

// Clean up on exit
process.on('SIGINT', () => {
    console.log('Caught interrupt signal, cleaning up...');
    // Ensure LEDs are turned off
    led23.digitalWrite(0);
    led24.digitalWrite(0);
    led25.digitalWrite(0);
    console.log('Cleanup complete, exiting.');
    process.exit();
});
