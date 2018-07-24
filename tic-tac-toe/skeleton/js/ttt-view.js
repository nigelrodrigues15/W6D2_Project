class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
  }

  bindEvents() {
    $(".row").on("click", "li", event => {
      const $square = $(event.currentTarget);
      this.makeMove($square);
      // this.game.
      // debugger
    });
  }

  makeMove($square) {
    let pos = $square.attr("data-pos").split(",");
    pos = pos.map((el) => parseInt(el));
    $square.attr("id","white");
    this.game.playMove(pos);
    // debugger
    $square.text(this.game.board.grid[pos[0]][pos[1]]);

    if (this.game.board.isOver()) {
      this.gameOver();
    }

  }

  gameOver() {
    let winner = this.game.winner();
    let $conclude = $("<label>");
    if (winner) {
      $conclude.append(`You win, ${winner}!`);
    } else {
      $conclude.append(`Its a DRAW!`);
    }
    this.$el.append($conclude);
  }


  //   this.board.print();
  //   if (this.winner()) {
  //     console.log(`${this.winner()} has won!`);
  //   } else {
  //     console.log('NO ONE WINS!');
  //   }
  //   gameCompletionCallback();
  // } else {
  //   // continue loop
  //   this.run(reader, gameCompletionCallback);




  setupBoard() {
    for (var r = 0; r < 3; r++) {
      const $row = $("<ul>").addClass("row");

      for (let c = 0; c < 3; c++) {
        const $square = $("<li>").addClass("square").attr("data-pos", [r, c]);
        $row.append($square);
      }
      this.$el.append($row);

    }
  }
}



module.exports = View;
