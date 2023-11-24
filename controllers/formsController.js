module.exports.form_get = async (req, res) => {
    res.render('index');
}

module.exports.form_post = async (req, res) => {
    res.send('new forms post');
}