const fetch = require("node-fetch");
const fs = require("fs");

const getData = async () => {
  try {
    const response = await fetch("http://numbersapi.com/42?json").then(
      result => {
        result.json().then(function(data) {
          console.log(data.text);
        });
      }
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getData
};
