const axios = require("axios").default
const express = require("express")
const cors = require("cors")
const { response } = require("express");
require('dotenv').config()
const app = express()

app.use(cors())

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

exports.handler = async function (event, context) {
    // your server-side functionality
    console.log("got to server")
    const hrWords = [
        "COACH",
        "GOALS",
        "UNION",
        "EXPAT",
        "MERIT",
        "BONUS",
        "STAFF",
        "TEAMS"
    ]

    // hrWords.forEach((word) =>
    // console.log(word))
    const wordIndex = getRandomInt(0, 6)
    todaysWord = hrWords[wordIndex]
    console.log('Todays Word', todaysWord)
    return {
        statusCode: 200,
        body: JSON.stringify(todaysWord)
    }


}