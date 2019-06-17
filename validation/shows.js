const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateShowInput(data) {
    let errors = {};

    data.title = validText(data.title) ? data.title : '';
    data.venue = validText(data.venue) ? data.venue : '';
    data.venueLocation = validText(data.venueLocation) ? data.venueLocation : '';
    data.synopsis = validText(data.synopsis) ? data.synopsis : '';
    data.coverUrl = validText(data.coverUrl) ? data.coverUrl : '';

    if (Validator.isEmpty(data.title)) {
        errors.text = 'Title field is required'
    }
    if (Validator.isEmpty(data.venue)) {
        errors.text = 'Venue field is required'
    }
    if (Validator.isEmpty(data.venueLocation)) {
        errors.text = 'Venue location field is required'
    }
    if (Validator.isEmpty(data.synopsis)) {
        errors.text = 'Synopsis field is required'
    }
    if (Validator.isEmpty(data.coverUrl)) {
        errors.text = 'Cover URL field is required'
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};