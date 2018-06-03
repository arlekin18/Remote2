const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const http = require('http');

let num = 0;

router.get('/', (req, res) => {
    const type = Math.round(-0.5 + Math.random() * 2);
    
    var today=Date.now();
    const addedMilliseconds = Math.round(Math.random() * 20000);
    const time=today+addedMilliseconds;
    const message = { type: "", content: "", timeStamp:  time };

    if (type == 1) {
        const dir = fs.readdirSync("./img/");
        const number = Math.floor(Math.random() * (-7)) + 7;
        console.log(number);
        const fileName = dir[number];
        const file = fs.readFileSync(__dirname + "./../../img/" + fileName, "base64");
        message.type = "file";
        message.content = file;

    }
    else {
        message.type = "text";
        message.content = "Your message is :" + num++ + " in general list";
    }
    res.send(message);
});


module.exports = router;