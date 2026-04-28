const fs = require('fs');
const https = require('https');

const API_KEY = "AIzaSyCByINm27yKCOgQIvGVWKPzNCtAyJZFc5M";
const URL = `https://language.googleapis.com/v1/documents:analyzeEntities?key=${API_KEY}`;

async function analyzeEntities(text) {
    return new Promise((resolve, reject) => {
        const data = JSON.stringify({
            document: { type: "PLAIN_TEXT", content: text },
            encodingType: "UTF8"
        });
        const req = https.request(URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Content-Length': data.length }
        }, (res) => {
            let body = '';
            res.on('data', (chunk) => body += chunk);
            res.on('end', () => resolve(JSON.parse(body)));
        });
        req.on('error', reject);
        req.write(data);
        req.end();
    });
}

async function run() {
    const competitorPhrases = [
        "Tulsa swimming pool contractor",
        "OKC swimming pool contractor",
        "Tulsa gunite pool installer",
        "outdoor living company",
        "swim in 90 days",
        "custom hot tubs",
        "pergolas and pavilions"
    ];
    
    const ourPhrases = [
        "Custom Gunite Pools",
        "Legacy Aquatic Engineering",
        "technical pool engineering firm",
        "geological foundations",
        "shale and limestone analysis",
        "918 native",
        "high-performance aquatic environments"
    ];

    try {
        const results = {
            competitor: await analyzeEntities(competitorPhrases.join('. ')),
            ours: await analyzeEntities(ourPhrases.join('. '))
        };
        fs.writeFileSync('scratch/entity_analysis.json', JSON.stringify(results, null, 2));
        console.log("Success");
    } catch (e) {
        console.error(e);
    }
}
run();
