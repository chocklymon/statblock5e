var fs = require('fs');
var mongoose = require('mongoose');
mongoose.connect('mongodb://mongo/statblock5e');

var Monster = require('../models/monster');

var fileName = process.argv[2];

fs.readFile(fileName, 'UTF-8', function(err, data) {
    if (err) {
        throw err;
    }
    var monsters = JSON.parse(data);
    for (var i = 0, l = monsters.length; i < l; i++) {
        // Ignore license elements
        if (!('license' in monsters[i])) {
            Monster.create(monsters[i]);
        }
    }
    console.log("Loaded " + fileName + " into the database.");
});
