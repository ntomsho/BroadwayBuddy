const request = require('request-promise');
const $ = require('cheerio');

const showParse = function(url) {
    return request(url)
    .then(function(html) {
        return {
            'title': $('.bsp-bio-title', html).first().text(),
            'type': $('.bsp-bio-sub-text', html).first().text(),
            'genre': $('.bsp-bio-sub-text', html).first().next().text(),
            'venue': $('.bsp-bio-links-top', html).first().children().first().text(),
            'venueLocation': $('.bsp-bio-links-top', html).first().children().last().text(),
            'synopsis': $('.bsp-bio-text', html).first().text(),

            'cover': $('.bsp-bio-image', html).first().children().first().children().first().attr('src')
        };
    })
    .catch(function(err) {
        console.log(err);
    });
};

module.exports = showParse;