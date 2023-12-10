const responseModele = require("../models/responseModele")
async function addResponse (req, res){
    let user_id = "unknown id"
    if (req.data.user.id) user_id = req.data.user.id
    const response = new responseModele({
        user_id: user_id,
        question_id: req.body.q_id,
        response: req.body.response
    })
    response.save()
    res.redirect(`/questions/${req.body.q_id}`)
}

module.exports={addResponse}