const View = require('./ttt-view.js');
const Game = require('./game.js');

$( () => {
  // Your code here
  const game = new Game();
  const $container = $('.ttt');
  const view = new View(game, $container);
  view.setupBoard();
  view.bindEvents();
});
