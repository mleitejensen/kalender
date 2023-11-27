const Result = require("../models/result")

module.exports.form_get = async (req, res) => {
    res.redirect("/")
}

module.exports.form_post = async (req, res) => {
    //console.log(req.body)
    const { email, answer, date } = req.body;

  try {
    const result = await Result.create({ email, answer, date });
    console.log(result)
  }
  catch(err) {
    console.log(err)
    res.status(400)
  }

    //console.log("email:", email, "answer:",answer);
    //res.send("Sendt post request");
}