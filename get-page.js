const url = "http://www.playbill.com/productions?venue-type=broadway"
const showParse = require('./show-parse');
let links = [];
let shows = ["test"];

const request = require('request-promise');
const cheerio = require('cheerio');

request(url)
.then(function(html) {
    const $ = cheerio.load(html);
    $('.pb-pl-tile-title').each(function(i, elem) {
        links.push($(this).parent().attr('href'));
    });
    return Promise.all(
        links.map(function(url) {
            return showParse('http://playbill.com' + url);
        })
    );
}).then(function(links) {
    console.log(links);
}).catch(function(err) {
    console.log(err);
});