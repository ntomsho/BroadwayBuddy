// const request = require('request');
// const requestPromise = require('request-promise');
// const cheerio = require('cheerio');

const url = "http://www.playbill.com/productions?venue-type=broadway"
const showParse = require('./show-parse');
let links = [];
let shows = ["test"];

// requestPromise(url, (error1, response, body1) => {
//     if (!error1) {
//         const $ = cheerio.load(body1);

//         // const shows = [];
//         // $('.pb-pl-tile-title').each(function(i, elem) {
//         //     shows.push({'title': $(this).text().slice(37, $(this).text().length - 33)});
//         // })
//         // console.log(shows);
//         $('.pb-pl-tile-title').each(function(i, elem) {
//             links.push($(this).parent().attr('href'));
//         })
//     }
// }).then(() => {
//     while (links.length > 0) {
//         const pageURL = "http://www.playbill.com" + links.shift();

//         requestPromise(pageURL, (error, response, body) => {
//             if (!error) {
//                 const $ = cheerio.load(body);
//                 let show = {};
//                 show['title'] = $('.bsp-bio-title').first().text();
//                 show['type'] = $('.bsp-bio-sub-text').first().text();
//                 show['genre'] = $('.bsp-bio-sub-text').first().next().text();
//                 shows.push(show);
//             }
//         })
//     }
// }).then(() => {
//     console.log(shows.length);
// });

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