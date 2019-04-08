const axios = require("axios");
const cheerio = require("cheerio");

const scrape = () => {
  return axios
    .get("http://www.nytimes.com")
    .then(res => {
      console.log("scraping");
      const $ = cheerio.load(res.data);
      const data = [];
      $("div.css-1100km").each(function(i,el){
          data.push($(this).find("a").attr('href'))
      })
      console.log(data)
    })
    .catch(err => console.log("you goofedd"));
};

module.exports = scrape;
