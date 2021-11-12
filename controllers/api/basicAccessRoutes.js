const router = require('express').Router();
const pirateSpeak = require('pirate-speak');

// The post route in which the unauthenticated user's text will only be translated into pirate speak
router.post('/pirate', (req,res) => {
    let stringToTranslate = req.body.input;
    let output = pirateSpeak.translate(stringToTranslate);

    res.json({
        input: stringToTranslate,
        output: output,
        translation: "pirate"
    });
});

module.exports = router;