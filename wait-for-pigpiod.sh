#!/bin/bash

# Function to check if pigpiod is up and running
check_pigpiod() {
    # Replace with an appropriate check command
    # For example, if you can ping the pigpiod service or check a specific port
    if pgrep -x "pigpiod" > /dev/null
    then
        return 0
    else
        return 1
    fi
}

# Wait for pigpiod to be ready
echo "Waiting for pigpiod to be ready..."
while ! check_pigpiod; do
    sleep 1
done

echo "pigpiod is ready."
# Now start the main application
node app.js
