function FetchPuzzle(attempted_puzzles){
  params = {attempted: attempted_puzzles};

  $.ajax({
    url: "/puzzles.json",
    dataType: "json",
    type: "get",
    // data: params,
    success: function(data){
      puzzle.current_puzzle = data;
    }
  })
}