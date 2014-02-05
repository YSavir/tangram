var tanagram = {
  current_puzzle: null,
  attempted_puzzles: [],

  savePuzzle: function savePuzzle(){
    var params = {
      save: {}
    }
    params.save["large_triangle_1"] = pieces.get_large_triangle_1()
    params.save["large_triangle_2"] = pieces.get_large_triangle_2()
    params.save["medium_triangle"] = pieces.get_medium_triangle()
    params.save["small_triangle_1"] = pieces.get_small_triangle_1()
    params.save["small_triangle_2"] = pieces.get_small_triangle_1()
    params.save["square"] = pieces.get_square()
    params.save["parallelogram"] = pieces.get_parallelogram()
    params["puzzle_id"] = tanagram.current_puzzle.puzzle.id
    console.log(params.save);

    $.ajax({
      url: "/puzzles/save",
      dataType: "json",
      type: "post",
      data: params
    });
  },

  loadPuzzle: function loadPuzzle(id){
    var params = {}
    if (id != null) {
      params["puzzle_id"] = id
    }

    $.ajax({
      url: "/puzzles/load",
      dataType: "json",
      type: "post",
      data: params,
      success: function(data){
        console.log(data["puzzle_to_load"])
        tanagram.current_puzzle.puzzle = data["puzzle_model"]
        pieces.large_triangle_1.x = data["puzzle_to_load"].large_triangle_1.x
        pieces.large_triangle_1.y = data["puzzle_to_load"].large_triangle_1.y
        pieces.large_triangle_1.r = data["puzzle_to_load"].large_triangle_1.r

        pieces.large_triangle_2.x = data["puzzle_to_load"].large_triangle_2.x
        pieces.large_triangle_2.y = data["puzzle_to_load"].large_triangle_2.y
        pieces.large_triangle_2.r = data["puzzle_to_load"].large_triangle_2.r

        pieces.medium_triangle.x = data["puzzle_to_load"].medium_triangle.x
        pieces.medium_triangle.y = data["puzzle_to_load"].medium_triangle.y
        pieces.medium_triangle.r = data["puzzle_to_load"].medium_triangle.r

        pieces.small_triangle_1.x = data["puzzle_to_load"].small_triangle_1.x
        pieces.small_triangle_1.y = data["puzzle_to_load"].small_triangle_1.y
        pieces.small_triangle_1.r = data["puzzle_to_load"].small_triangle_1.r

        pieces.small_triangle_2.x = data["puzzle_to_load"].small_triangle_2.x
        pieces.small_triangle_2.y = data["puzzle_to_load"].small_triangle_2.y
        pieces.small_triangle_2.r = data["puzzle_to_load"].small_triangle_2.r

        pieces.square.x = data["puzzle_to_load"].square.x
        pieces.square.y = data["puzzle_to_load"].square.y
        pieces.square.r = data["puzzle_to_load"].square.r

        pieces.parallelogram.x = data["puzzle_to_load"].parallelogram.x
        pieces.parallelogram.y = data["puzzle_to_load"].parallelogram.y
        pieces.parallelogram.r = data["puzzle_to_load"].parallelogram.r
      }
    });
  }
}

