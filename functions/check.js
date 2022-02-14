const axios = require("axios")
const express = require("express")
const cors = require("cors")
const { response } = require("express");
require('dotenv').config();
const app = express();

app.use(cors());

exports.handler = async function (event, context) {
    // console.log(event.queryStringParameters)
    let word = event.queryStringParameters.word
    let resText
    const options = {
        method: 'GET',
        url: 'https://twinword-word-graph-dictionary.p.rapidapi.com/association/',
        params: { entry: word },
        headers: {
            'x-rapidapi-host': 'twinword-word-graph-dictionary.p.rapidapi.com',
            'x-rapidapi-key': 'ca999ba4camshd296818e5dce4a5p14f26ejsn2d8cfe521afa'
        }
    };

    return axios.request(options).then(function (response) {
        console.log('DATA RECEIVED', response.data);
        resText = response.data.result_msg

        // console.log('Response Text:', resText)

        console.log(resText);
        return {
            statusCode: 200,
            body: JSON.stringify(resText)
        }



    }).catch(function (error) {

        console.error(error);
        return {
            statusCode: 500,
            body: JSON.stringify(resText)
        }
    });


}