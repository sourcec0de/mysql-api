var Schema = require('jugglingdb').Schema;
var db = new Schema('mysql',{
    host: '',
    username: '',
    port: 3306,
    password: '',
    database: ''
});

var Tag = db.define('tags',{
    name: String,
    date: { type:Date, default: function(){ return new Date; } },
    timestamp: { type:Number, default: Date.now }
});


// Auto Migrates Schema -- DESTROYS EVERYTHING
// schema.automigrate();

module.exports = Tag;