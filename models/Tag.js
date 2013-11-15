var Schema = require('jugglingdb').Schema;
var fs = require('fs');
var config = JSON.parse(fs.readFileSync(__dirname+'/../config/db.config.json','utf8'));
var db = new Schema('mysql',config);

var Tag = db.define('tags',{
    name: String,
    date: { type: Date, default: function(){ return new Date; } },
    timestamp: { type:Number, default: Date.now }
});

Tag.validatesPresenceOf('name');

// Auto Migrates Schema -- DESTROYS EVERYTHING
// db.automigrate();
module.exports = Tag;