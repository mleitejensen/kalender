const express = require("express")
const app = express()
const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://tester:test@kalender-cluster.qqac8qh.mongodb.net/?retryWrites=true&w=majority'
const formsRoutes = require('./routes/formsRoutes');

mongoose.connect(dbURI,)
  .then(() => console.log('Connected to the database'))
  .catch((err) => console.error('Error connecting to the database:', err));


app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public/'));
app.use(express.json());

app.listen(3000, "0.0.0.0" , () => {
    console.log('Server running on port 3000')
})

app.get('/', (req, res) => res.render('index'));

app.get('/december/:date', function(req, res) {
    const date = req.params.date
    res.sendFile(`public/december/${date}/content.html` , { root : __dirname});
})

app.use(formsRoutes)

app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
  });
