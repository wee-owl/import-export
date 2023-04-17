/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable no-unused-vars */
/* eslint-disable object-curly-spacing */
import Game, {GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame} from './game.js';

const game = new Game();
game.start();