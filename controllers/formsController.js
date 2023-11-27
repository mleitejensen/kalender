module.exports.form_get = async (req, res) => {
    res.redirect("/december/1")
}

module.exports.form_post = async (req, res) => {
    console.log(req.body)
    //const { email, answer } = req.body;

    //console.log("email:", email, "answer:",answer);
    res.send("Sendt post request");
}