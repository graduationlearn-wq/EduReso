const exp = require('express');
const mong = require('mongoose');
const path = require('path');
const bcrypt = require('bcrypt');
const port = 3020;

const app = exp();
app.use(exp.static(__dirname));
app.use(exp.urlencoded({ extended: true }));

mong.connect('mongodb://localhost:27017/registered')
  .then(() => console.log('MongoDB connection successful'))
  .catch(err => console.error('MongoDB connection error:', err));

const userSchema = new mong.Schema({
  name: { type: String, required: true, trim: true },
  mail: { type: String, required: true, unique: true, lowercase: true, trim: true },
  pass: { type: String, required: true }
}, { timestamps: true });

const User = mong.model('User', userSchema);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'HomePage.html'));
});

// BUG FIX: Passwords now hashed with bcrypt before saving
app.post('/register', async (req, res) => {
  try {
    const { name, mail, pass } = req.body;

    // Basic validation
    if (!name || !mail || !pass) {
      return res.status(400).send('All fields are required.');
    }
    if (pass.length < 8) {
      return res.status(400).send('Password must be at least 8 characters.');
    }

    // Check if email already registered
    const existing = await User.findOne({ mail: mail.toLowerCase().trim() });
    if (existing) {
      return res.status(409).send('An account with this email already exists.');
    }

    // Hash password
    const saltRounds = 12;
    const hashedPass = await bcrypt.hash(pass, saltRounds);

    const newUser = new User({ name, mail, pass: hashedPass });
    await newUser.save();

    res.redirect('/Login.html');
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).send('Error registering user. Please try again.');
  }
});

app.listen(port, () => {
  console.log(`EduReso server started on http://localhost:${port}`);
});
