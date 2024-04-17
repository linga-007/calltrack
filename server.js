const express = require('express');

const app = express();

app.post('/twiml/:number', (req, res) => {
    // Define your TwiML response
    const twimlResponse = `<?xml version="1.0" encoding="UTF-8"?>
<Response>
  <Dial>
    <Number>+91${req.params.number}</Number>
  </Dial>
</Response>`;
    res.set('Content-Type', 'text/xml');
    res.send(twimlResponse);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
