var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Ad = new Schema({
  user_id: String,
  content: String,
  media_name: String,
  company_name: String,
  company_email: String,
  company_phone: String,
  company_url: String,
  respond: String,
  updated_at: Date
});
mongoose.model('Ad', Ad);
var mongoUri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/express-ad';
mongoose.connect('mongoUri');