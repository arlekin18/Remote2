# Remote2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7.

Fetch data(could be text message/image in base64 format and time to live). Fetched messages are viewing on half-screen with their time livings. 
Polling started every 1 second and check all messages time living. If message's timeliving is away, this message remove from screen.

1. Emulate Express web-server:
    cd server
    node server.js

2. Run Angular App:
    cd ..
    npm start

Then new browser window will be opened. And you can see working app. 
