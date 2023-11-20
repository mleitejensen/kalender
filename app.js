const express = require("express")
const app = express()


app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public/'));

app.listen(3000, () => {
    console.log('Server running on port 3000')
})

app.get('/', function (req, res) {
    res.render('index');
});

app.get('/december/:date', function(req, res) {
    const date = req.params.date
    res.render('/december/' + date + '/content.html')
})



/*
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
  });

*/