const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.status(200).json({
        success: true,
        message: "hello world!"
    });
})

app.listen(8080);