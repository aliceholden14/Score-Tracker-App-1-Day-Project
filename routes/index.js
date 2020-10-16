var express = require('express');
// const { route } = require('./scores');
var router = express.Router();
const {
  getTopTenScores,
  getUniqueGameTypes,
  addNewPlayerScores,
}=require('../model/scores')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// router.get('/', (req, res) => {
//   res.sendFile(path.join(`${__dirname}/index.html`));
// });

router.get('/scores', async (req, res) => {
  const uniqueGames = await getUniqueGameTypes();
  res.json({ result: uniqueGames });
})

router.get('/scores/:game', async (req, res) => {
  const game = req.params.game;
  const gameScoreResult = await getTopTenScores(game);
  res.json({ result: gameScoreResult });
});

router.post('/scores', async (req, res) => {
  const response = await addNewPlayerScores(req.body)
  res.send( response )
});

module.exports = router;
