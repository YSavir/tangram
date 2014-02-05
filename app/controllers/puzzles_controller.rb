class PuzzlesController < ApplicationController

  def index
    puzzles = Puzzle.all
    puzzle = puzzles.sample
    puzzle.json_puzzle
    respond_to do |format|
      format.json {render json: {puzzle: puzzle}}
      format.html
    end
  end

  def save
    puzzle_to_save = {}
    puts params[:save]
    # {"large_triangle_1"=>{"x"=>"250", "y"=>"190", "rotation"=>"180"},
    #  "large_triangle_2"=>{"x"=>"310", "y"=>"250", "rotation"=>"270"},
    #  "medium_triangle"=>{"x"=>"160", "y"=>"340", "rotation"=>"0"},
    #  "small_triangle_1"=>{"x"=>"220", "y"=>"250", "rotation"=>"90"},
    #  "square"=>{"x"=>"250", "y"=>"310", "rotation"=>"0"},
    #  "parallelogram"=>{"x"=>"160", "y"=>"220", "rotation"=>"0"}}
    params[:save].each do |piece, piece_info|
      # puts piece_info
      puzzle_to_save[piece] = {}
      # puts puzzle_to_save[piece]
      piece_info.each do |key, value|
        puzzle_to_save[piece][key] = value
      end
    end
    puts "========================================"
    puts current_user.id
    puts puzzle_to_save
  end

end