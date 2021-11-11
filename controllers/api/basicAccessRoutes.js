const router = require('express').Router();
const pirateSpeak = require('pirate-speak');

// we want a route that fassciltates the landing page with one ssimple translator
//api/basic/pirate
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