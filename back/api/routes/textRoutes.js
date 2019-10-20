module.exports = function (app) {
    var text = require('../controllers/textController');

    app.route('/text')
        .get(text.get_text)
};