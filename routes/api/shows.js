const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Show = require('../../models/Show');
const validateShowInput = require('../../validation/shows');

router.get('/', (req, res) => {
    Show.find()
        .sort({ timeStamp: -1 })
        .then(shows => res.json(shows))
        .catch(err => res.status(404).json({ noshowsfound: 'No shows found'}));
});

router.get('/:id', (req, res) => {
    Show.findById(req.params.id)
        .then(show => res.json(show))
        .catch(err => {
            res.status(404).json({ noShowFound: 'No show found with that ID'})
        });
});

module.exports = router;