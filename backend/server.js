const express = require('express')
const cors = require('cors')
const nodemailer = require('nodemailer')
const expressStatic = require('express-static');
const path = require('path')

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'build')));

app.get('/hello', (req, res) => {
    console.log('hello')
})

app.post('/api/contact', async (req, res) => {
    console.log('sending email')
    const { name, email, message } = req.body;
    try {
      const transporter = nodemailer.createTransport({
        service: 'Gmail', // Replace with your email service
        auth: {
          user: 'racegambit@gmail.com', // Replace with your email
          pass: 'rujohftxrocjqlbd', // Replace with your email password
        },
      });
  
      const mailOptions = {
        from: email,
        to: 'jiheon.ham61@gmail.com', // Replace with your email
        subject: `Contact Form Submission from ${name}`,
        text: message,
      };
  
      await transporter.sendMail(mailOptions);
  
      res.redirect('/')
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'Error: Could not send the email.' });
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build'));
  });


  const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port 8080.`);
  });