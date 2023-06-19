const express = require('express');
const session = require('express-session');

const app = express();



app.use(session({
    secret: "Key that will sign cookies",
    resave: false,
    saveUninitialized: false
    
}));

const user = {
    name: 'omar',
    age: 36,
    nationality: "moroccan",
};

app.get('/login', (req, res) => {
  req.session.user = user;
  req.session.save();
  return res.send('User logged in successfully');
});
app.get('/user', (req, res) => {
    return res.send(req.session.user);
});
app.get('/logout', (req, res) => {
    req.session.destroy();
    res.send('User logged out 🙂');
});
app.get('/', (req, res) => {
  req.session.isAuthenticated = true;
  console.log(req.session);
  console.log(req.session.id);
  res.send('Welcome Sessions');
});

app.listen(4000, () => {
  console.log("Server listening on http://localhost:4000");
});
