const fs = require('fs');
const https = require('https');

const API_KEY = "AIzaSyCByINm27yKCOgQIvGVWKPzNCtAyJZFc5M";
const URL = `https://language.googleapis.com/v1/documents:analyzeEntities?key=${API_KEY}`;

function analyzeEntities(text) {
    return new Promise((resolve, reject) => {
        const data = JSON.stringify({
            document: {
                type: "PLAIN_TEXT",
                content: text
            },
            encodingType: "UTF8"
        });

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': data.length
            }
        };

        const req = https.request(URL, options, (res) => {
            let body = '';
            res.on('data', (chunk) => body += chunk);
            res.on('end', () => {
                console.log("Response Status:", res.statusCode);
                console.log("Response Body (first 500 chars):", body.substring(0, 500));
                try {
                    resolve(JSON.parse(body));
                } catch (e) {
                    reject(new Error("Failed to parse JSON: " + body.substring(0, 500)));
                }
            });
        });

        req.on('error', (e) => reject(e));
        req.write(data);
        req.end();
    });
}

const pmhContent = `Pool Builder Tulsa Oklahoma`;

async function run() {
    try {
        const results = await analyzeEntities(pmhContent);
        console.log("Success");
    } catch (err) {
        console.error("Error:", err.message);
    }
}

run();
