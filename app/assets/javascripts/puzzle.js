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
    params.save["small_triangle_2"] = pieces.get_small_triangle_2()
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
        tanagram.current_puzzle.puzzle = data["puzzle_model"]
        tanagram.placePieces(pieces, data["puzzle_to_load"]);
        tanagram.placePieces(puzzle, tanagram.current_puzzle.puzzle);
      }
    });
  },

  findUserSaves: function findUserSaves(){
    $.ajax({
      url: "/puzzles/user_saves",
      dataType: "json",
      type: "post",
      success: function(data){
        bb = data
        $("#saves_list").empty();
        for (saved_game in data){
          var htmlString = "<li><button class='save' id='saveNum" + saved_game + "'>" +
                                  data[saved_game][0] +
                                  ", saved on " +
                                  data[saved_game][1] +
                                  "</button></li>"
          var $saveGameElement = $(htmlString)
          $("#saves_list").append($saveGameElement)
        }
      }
    });
  },

  placePieces: function placePieces(pieceSet, pieceInfo){
    pieceSet["large_triangle_1"]["x"] = pieceInfo.large_triangle_1.x
    pieceSet["large_triangle_1"]["y"] = pieceInfo.large_triangle_1.y
    pieceSet["large_triangle_1"].rotation = pieceInfo.large_triangle_1.r

    pieceSet["large_triangle_2"]["x"] = pieceInfo.large_triangle_2.x
    pieceSet["large_triangle_2"]["y"] = pieceInfo.large_triangle_2.y
    pieceSet["large_triangle_2"].rotation = pieceInfo.large_triangle_2.r

    pieceSet["medium_triangle"]["x"] = pieceInfo.medium_triangle.x
    pieceSet["medium_triangle"]["y"] = pieceInfo.medium_triangle.y
    pieceSet["medium_triangle"].rotation = pieceInfo.medium_triangle.r

    pieceSet["small_triangle_1"]["x"] = pieceInfo.small_triangle_1.x
    pieceSet["small_triangle_1"]["y"] = pieceInfo.small_triangle_1.y
    pieceSet["small_triangle_1"].rotation = pieceInfo.small_triangle_1.r

    pieceSet["small_triangle_2"]["x"] = pieceInfo.small_triangle_2.x
    pieceSet["small_triangle_2"]["y"] = pieceInfo.small_triangle_2.y
    pieceSet["small_triangle_2"].rotation = pieceInfo.small_triangle_2.r

    pieceSet["square"]["x"] = pieceInfo.square.x
    pieceSet["square"]["y"] = pieceInfo.square.y
    pieceSet["square"].rotation = pieceInfo.square.r

    pieceSet["parallelogram"]["x"] = pieceInfo.parallelogram.x
    pieceSet["parallelogram"]["y"] = pieceInfo.parallelogram.y
    pieceSet["parallelogram"].rotation = pieceInfo.parallelogram.r
  }
}

$(function(){
  $("#load").on("click", tanagram.findUserSaves())
  $("#saves_list").on("click", "button", function(){
    var buttonId = $(this).attr("id");
    var saveId = buttonId.split("m")[1]
    tanagram.loadPuzzle(saveId);
  })
})