"use strict";

const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json({});

var talentTreeList = JSON.parse(fs.readFileSync('./mocked_data/talentTreeList.json', 'utf8'));

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.listen(3210, () => console.log('Listening on 3210'));

/**
 * PUBLISHED METHODS 
 */

 // Save a talent tree into memory. TODO: Database?
app.post('/saveTalentTree', jsonParser, function(req, res, next) {
    if (talentTreeList.count > 5 || !req.body)
        res.send({
            result: 'bad',
            message: talentTreeList.count > 5 ? 'Max. talent trees' : 'No talent tree provided'
        });
    else {

        talentTreeList = {...talentTreeList, 
            count: talentTreeList.count + 1
        };

        talentTreeList.trees[req.body.name]= req.body.tree;

        console.log('%j', talentTreeList);

        res.send({result: 'ok', talentTreeList: talentTreeList})
    }
});

// Get the list of talent trees saved
app.get('/getTalentTreeList', jsonParser, function(req, res, next) {
    const talentList = Object.keys(talentTreeList.trees);
    res.send({list: talentList});
});

// Get a talent tree
app.get('/getTalentTree/:name', jsonParser, function(req, res, next) {
    const names = Object.keys(talentTreeList.trees);
    if (!req.params || names.indexOf(req.params.name) === -1)
        res.send({
            result: 'bad',
            message: !req.params ? 'No talent tree specified' : 'Talent tree not in the list'
        });
    else
        res.send({
            result: 'ok',
            talentTree: talentTreeList.trees[req.params.name]
        });
});