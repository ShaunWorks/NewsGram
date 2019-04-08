const axios = require("axios");
const cheerio = require("cheerio");

const scrape = () => {
  return axios
    .get("https://www.cnn.com/specials/health/fitness-excercise")
    .then(res => {
      if (res.status === 200) {

        console.log("scraping");
        const html = '<h3 class="title">I have a bunch of questions on how to behave when contributing to open source</h3>'
        const $ = cheerio.load(res.data);
        //console.log($.html())
        const selector = $('article')
        $('article').each((i,el) => {
          const item = $(el).html();
          console.log(item)
        })
        //console.log(selector.html())
        const data = [];
      }
      else console.log(':/')
    })
    .catch(err => console.log("you goofedd"));
};

module.exports = scrape;
