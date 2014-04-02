/*
 * GET home page.
 */
exports.index = function(req, res) {
  res.render('index', {
    title: 'AMM - 反媒體壟斷'
  });
};
var mongoose = require('mongoose');
var Ad = mongoose.model('Ad');
/*
	    user_id: String,
    content: String,
    media_name: String,
    company_name: String,
    company_email: String,
    company_phone: String,
    company_url: String,
    respond: String,
    updated_at: Date
*/
exports.create = function(req, res) {
  new Ad({
    content: req.body.content,
    media_name: req.body.media_name,
    company_name: req.body.company_name,
    company_email: req.body.company_email,
    company_phone: req.body.company_phone,
    company_url: req.body.company_url,
    respond: req.body.respond,
    updated_at: Date.now()
  }).save(function(err, ad, count) {
    res.redirect('/');
  });
};
exports.index = function(req, res) {
  Ad.find(function(err, ads, count) {
    res.render('index', {
      title: 'AMM - 反媒體壟斷',
      ads: ads
    });
  });
};