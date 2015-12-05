/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /bars              ->  index
 * POST    /bars              ->  create
 * GET     /bars/:id          ->  show
 * PUT     /bars/:id          ->  update
 * DELETE  /bars/:id          ->  destroy
 */

'use strict';



var _ = require('lodash');
var Bar = require('../models/yelp.model');
var yelpnode = require('yelp');

exports.startAuth = function(req, res) {
  var yelp = yelpnode.createClient({
      consumer_key: "Q2FFRsJZCDjmpYB2UfLAHQ",
      consumer_secret: "J0GUGEAW8kq6tvLV6yxCv0bFf6o",
      token: "pZz05H6-6asVhqgzRcOJGThZjnj4ScVg",
      token_secret: "Bkd_MgdojXCvyD7Z08t7QQYNEQk"
    });
    yelp.search({category_filter: "restaurants", location: req.params.location}, function(error, data) {
      //console.log(error);
          if(error) { return handleError(res, error); }
          var extBars = data.businesses.map(function(item){
            return {
                    name: item.name,
                    url:item.url,
                    image_url:item.image_url,
                    snippet: item.snippet_text,
                    attending: []
                  };
          });
          return res.json(200,extBars);
    });
}

// Get list of bars
exports.index = function(req, res) {
  Bar.find(function (err, bars) {
    if(err) { return handleError(res, err); }
    return res.json(200, bars);
  });
};

// Get a single bar
exports.show = function(req, res) {
  Bar.findById(req.params.id, function (err, bar) {
    if(err) { return handleError(res, err); }
    if(!bar) { return res.send(404); }
    return res.json(bar);
  });
};

// Creates a new bar in the DB.
exports.create = function(req, res) {
  Bar.create(req.body, function(err, bar) {
    if(err) { return handleError(res, err); }
    return res.json(201, bar);
  });
};

// Updates an existing bar in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Bar.findById(req.params.id, function (err, bar) {
    if (err) { return handleError(res, err); }
    if(!bar) { return res.send(404); }
    bar.attending = req.body.attending;
    var updated = bar;
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, bar);
    });
  });
};

// Deletes a bar from the DB.
exports.destroy = function(req, res) {
  Bar.findById(req.params.id, function (err, bar) {
    if(err) { return handleError(res, err); }
    if(!bar) { return res.send(404); }
    bar.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
