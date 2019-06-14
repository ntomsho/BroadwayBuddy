const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require("./routes/api/users");
const shows = require("./routes/api/shows");
const people = require("./routes/api/people");

mongoose
.connect(db, { useNewUrlParser: true })
.then(() => console.log("Connected to MongoDB successfully"))
.catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(passport.initialize());
require('./config/passport')(passport);
const User = require('./models/User');

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
app.get("/", (req, res) => {
    const user = new User({
        email: 'wild@heart.com',
        password: 'notthebees'
    })
    user.save()
    res.send("You Again?")
});
app.use("/api/users", users);
app.use("/api/shows", shows);
app.use("/api/people", people);