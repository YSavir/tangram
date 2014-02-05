var tanagram = {
  current_puzzle: null,
  attempted_puzzles: [],

  savePuzzle: function savePuzzle(){
    var save = {};
    save["large_triangle_1"] = pieces.get_large_triangle_1()
    save["large_triangle_2"] = pieces.get_large_triangle_2()
    save["medium_triangle"] = pieces.get_medium_triangle()
    save["small_triangle_1"] = pieces.get_small_triangle_1()
    save["small_triangle_1"] = pieces.get_small_triangle_1()
    save["square"] = pieces.get_square()
    save["parallelogram"] = pieces.get_parallelogram()
    console.log(save);

    $.ajax({
      url: "/puzzles/save",
      dataType: "json",
      type: "post",
      data: save
    });
  }
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
  });
}