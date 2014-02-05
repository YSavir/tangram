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
    puts JSON.parse(params.class)
  end

end