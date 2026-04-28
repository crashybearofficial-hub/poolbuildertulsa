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
            res.on('end', () => resolve(JSON.parse(body)));
        });

        req.on('error', (e) => reject(e));
        req.write(data);
        req.end();
    });
}

const pmhContent = `
At PMH Tulsa Swimming Pool Contractor we are the experts in the Tulsa gunite pool construction business. 
As the experts in the Tulsa swimming pool contractor niche, we specialize in providing swimming pool construction options to fit every budget and price range. 
Want to learn how our Tulsa swimming pool contractor process works?
Our team of highly trained and respected Tulsa swimming pool contractor designers will meet with you to discuss your vision, your ideas, and your overall aspirations for your pool construction project. 
Our goal is to fully understand the physical space where your pool will be constructed and to understand your budget needs. 
After sitting down with you to discuss your Tulsa swimming pool contractor needs, we will then create a cutting edge, mind-blowing, beyond state-of-the-art, three dimensional pool design and drawing/blueprint.
We do all of our sourcing locally so that you don’t have to worry about that! 
We are able to promise you a very quick turnaround time on any of the projects that we start for you, and that is because we are truly dedicated to giving you the best experience from the beginning to the very end! 
no matter what maintenance issues you may run across during your time of being a luxury-backyard-enthusiast, you can bet that our team will be there to help you solve the problem as quickly as possible! 
This is why we have a turnaround time of 90 days.
`;

const ourContent = `
Custom Gunite Pools & Legacy Aquatic Engineering. Tulsa's premier technical pool engineering firm. 
We specialize in high-performance gunite construction, complex terrain, and luxury estate pools. 
Your home is built on a geological minefield. We build the aquatic foundations that command it. 
High-Performance pool construction for the Tulsa Metro. Built for the heat, the clay, and the centuries. 
You aren't looking for a salesperson with a glossy brochure. You are looking for an engineer who understands why the limestone in Sand Springs behaves differently than the shale in Owasso. 
We don't do volume. We do legacy. Every project we accept is treated as a masterwork of aquatic engineering.
`;

async function run() {
    try {
        const results = {
            competitor_entities: await analyzeEntities(pmhContent),
            our_entities: await analyzeEntities(ourContent)
        };
        fs.writeFileSync('scratch/entity_analysis.json', JSON.stringify(results, null, 2));
        console.log("Entity analysis complete. Saved to scratch/entity_analysis.json");
    } catch (err) {
        console.error(err);
    }
}

run();
