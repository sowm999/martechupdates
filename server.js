const express = require('express');
const firebaseAdmin = require('firebase-admin');
const bodyParser = require('body-parser');
require('dotenv').config();

const cors = require('cors');


// Initialize the Firebase Admin SDK
const serviceAccount = require(process.env.PRIVATE_KEY_PATH);
firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: process.env.DATABASE_URL
});

// Set up the Express app
const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const newsletterDB = firebaseAdmin.database().ref('newsletter');

app.post('/submit', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Missing name or emailid' });;
  }

  const newNewsletterRef = newsletterDB.push();
  newNewsletterRef.set({
    name: name,
    emailid: email
  })
    .then(() => {
      return res.status(200).json({ message: 'Message saved successfully' });
    })
    .catch((error) => {
      return res.status(500).json({ error: 'Error saving message: ' + error.message });
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
