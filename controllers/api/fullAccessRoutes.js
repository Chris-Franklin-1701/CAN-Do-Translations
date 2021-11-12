const router = require('express').Router();
const pigLatin = require('pig-latin');

// These were the imported modules that were responsible for translating text into different languages
// Due to time constraints, we only were capable of outputting one at a time by changing the post route output method
// These modules all work as we initially wanted them to
const pirateSpeak = require('pirate-speak');
const hodor = require('hodor-api');
const br = require('braille');
const wordVomit = require('word-vomit');

// The post route of an authenticated user in which their text can be translated into another language other than pirate speak
router.post('/', async (req, res) => {
    try {
        let stringToTranslate = req.body.input;
        let output = pigLatin(stringToTranslate);

        res.json({
            input: stringToTranslate,
            output: output,
            translation: "pigLatin"
        });
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

module.exports = router;