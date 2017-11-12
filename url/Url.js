var mongoose = require('mongoose');  
var UrlSchema = new mongoose.Schema({  
  name: String
});
mongoose.model('Url', UrlSchema);
module.exports = mongoose.model('Url');