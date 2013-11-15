/*
 * GET home page.
 */

var Tag = require('../models/Tag');


// Get all tags
exports.index = function(req,res){
    Tag.all({
        where: req.param('where') || void 0,
        order: req.param('order') || void 0,
        limit: req.param('limit') || void 0,
        skip:  req.param('skip')  || void 0
    },function(err,tags){
        if(err) return res.json(err,500);
        res.json(tags)
    });
};

// Show Single Tag by Id
exports.show = function(req,res){
    Tag.find(req.param('id'),function(err,tag) {
        if(err) return res.json(err,500);
        if(!tag) return res.json({
            msg:"No Tag Found with id: "+req.param('id')
        },404);
        res.json(tag)
    });
};

// Create New Tag
exports.create = function(req,res){
    console.log(req.body)
    var tag = new Tag(req.body);

    tag.save(function(err){
        console.log(err)
        if(err) return res.json(err,400);
        console.log("SAVE")
        res.json(tag,201)
    });
};

// Delete Tag by Id
exports.delete = function(req,res){
    Tag.find(req.param('id'),function(err,tag) {
        if(err) return res.json(err,500);
        if(!tag) return res.json({
            msg:"No Tag Found with id: "+req.param('id')
        },404);
        tag.destroy(function(err){
            if(err) return res.json(err,400);
            res.json({
                id:tag.id,
                msg:"Tag Removed Successfully"
            },200)
        });
    });
};