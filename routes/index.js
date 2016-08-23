var express = require('express');
var router = express.Router();

// Connect to mongo
var Monster = require('../models/monster');

router.get('/autocomplete/:prefix', function(req, res, next) {
    var expression = new RegExp(req.params.prefix, 'i');
    Monster.find({"name": expression}, 'name id').exec().then(
        function(data) {
            res.jsonp(data);
        },
        function(err) {
            res.status(500).jsonp({"error": err});
        }
    );
});

router.get('/monster/:id', function (req, res, next) {
    Monster.findById(req.params.id).exec().then(
        function(data) {
            if (data) {
                res.jsonp(data);
            } else {
                res.status(404).jsonp({"error": "Not Found"});
            }
        },
        function(err) {
            res.status(500).jsonp({"error": err});
        }
    );
});

module.exports = router;
