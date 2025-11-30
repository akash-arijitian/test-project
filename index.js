const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const example_image = 'https://tse3.mm.bing.net/th/id/OIF.8sbPratvpFakKsMLxjoHoQ?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3'

// Endpoint to handle incoming dialogflow events 
// You can replace req (Request) and res (Respond) with any desired names
app.post('/dialog', async(req, res) => {
  const eventPayload = req.body
  console.log(eventPayload);
})

app.listen(3000, () => console.log('Webhook server running on port 3000'));



