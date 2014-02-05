class PuzzlesController < ApplicationController

  def index
    puzzles = Puzzle.all
    puzzle = puzzles.sample
    puzzle.json_puzzle
    respond_to do |format|
      format.json { render json: {puzzle: puzzle} }
      format.html
    end
  end

  def save
    if current_user
      user_id = current_user.id
      Saved.save_puzzle(params, current_user.id)
    end

    render :json => ""
  end

  def load
    if params["puzzle_id"]
      puzzle_id = params["puzzle_id"]
      puzzle_to_load = Saved.find(puzzle_id)
    else
      users_saved_games = Saved.where(user_id: current_user.id)
      puzzle_to_load = users_saved_games.pop
    end
    puzzle_model  = puzzle_to_load.puzzle
    puzzle_to_load.json_puzzle
    respond_to do |format|
      format.json {render json: { puzzle_to_load: puzzle_to_load, puzzle_model: puzzle_model } }
      format.html
    end
  end

end