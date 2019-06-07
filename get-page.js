const request = require('request');
const cheerio = require('cheerio');

const url = "http://www.playbill.com/productions?venue-type=broadway"

request(url, (error, response, body) => {
    if (!error) {
        const $ = cheerio.load(body);

        // const shows = [];
        // $('.pb-pl-tile-wrapper').each(function(i, show) {
        //     shows.push($(this));
        // })
        // console.log($(shows[0]).children('.pb-pl-tile-title').text());

        const shows = [];
        $('.pb-pl-tile-title').each(function(i, elem) {
            shows.push({'title': $(this).text().slice(37, $(this).text().length - 33)});
        })
        console.log(shows);
    }
});