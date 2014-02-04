var tanagram = {
  current_puzzle: null,
  attempted_puzzles: []
}

function fetchPuzzle(attempted_puzzles){
  params = {attempted: attempted_puzzles};

  // makes an ajax call, returning a random puzzle
  // will eventually use params to only return puzzles the user hasn't done yet
  $.ajax({
    url: "/puzzles.json",
    dataType: "json",
    type: "get",
    // data: params,
    success: function(data){
      tanagram.current_puzzle = data;
      tanagram.attempted_puzzles.push(data);
    }
  })
}