const PORT = 8000
const axios = require("axios").default
const express = require("express")
const cors = require("cors")
const {response} = require("express");
require('dotenv').config()
const app = express()

app.use(cors())

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.get('/word', (req, res) => {
    const options = {
        method: 'GET',
        url: 'https://random-words5.p.rapidapi.com/getMultipleRandom',
        params: {count: '5', wordLength: '5'},
        headers: {
            'x-rapidapi-host': 'random-words5.p.rapidapi.com',
            'x-rapidapi-key': process.env.RAPID_API_KEY
        }
    }
    axios.request(options).then((response) => {
        console.log(response.data[0])
        res.json(response.data[0])

    }).catch((error) => {
        console.error(error)
    })
})

app.get('/wordhr',(req,res) => {
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
    const wordIndex = getRandomInt(0,6)
    console.log(hrWords[wordIndex])

    res.json(hrWords[wordIndex])
})


app.get('/check', (req, res) => {
    const word = req.query.word

    const options = {
        method: 'GET',
        url: 'https://twinword-word-graph-dictionary.p.rapidapi.com/association/',
        params: {entry: word},
        headers: {
            'x-rapidapi-host': 'twinword-word-graph-dictionary.p.rapidapi.com',
            'x-rapidapi-key': process.env.RAPID_API_KEY
        }
    }
    axios.request(options).then((response) => {
        console.log(response.data)
        res.json(response.data.result_msg)
    }).catch((error) => {
        console.error(error)
    })
})

let port = process.env.PORT;
if (port == null || port == "") {
    port = 8000;
}
app.listen(port, () => console.log('Server running on port ' + port))