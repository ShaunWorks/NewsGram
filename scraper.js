const axios = require("axios");
const cheerio = require("cheerio");

const scrape = () => {
  return axios
    .get("https://www.cnn.com/specials/health/fitness-excercise")
    .then(res => {
      if (res.status === 200) {

        console.log("scraping");
        const $ = cheerio.load(res.data);
        const data = [];

        $('article').each((i,el) => {
          const item = $(el).html();
          const headline = $(el).find('.cd__headline-text').text().trim();
          const link = 'https://www.cnn.com' + $(el).find('.media a').attr('href');
          const media = $(el).find('.media a img').attr('data-src-medium').replace('//', '');
          const article = {
              headline: headline,
              link: link,
              media: media
          } 
          data.push(article);
        })
        return data;
      }
      else console.log('Page returned with a status of: ' + res.status)
    })
    .catch(err => console.log(err));
};

module.exports = scrape;
