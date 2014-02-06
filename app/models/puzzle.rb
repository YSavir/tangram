class Puzzle < ActiveRecord::Base
  attr_accessible :large_triangle_1, :large_triangle_2, :medium_triangle, :name, :parallelogram, :small_triangle_1, :small_triangle_2, :square

  has_many :saveds

  def to_json(item)
    data = {}
    hashes = item.split(", ")
    hashes.each do |hash|
      thing = hash.split(":")
      data["#{thing[0]}"] = thing[1]
    end
    data["x"] = data["x"].to_i
    data["y"] = data["y"].to_i
    data["r"] = data["r"].to_i
    return data
  end

  def json_puzzle
    self.large_triangle_1 = self.to_json(large_triangle_1)
    self.large_triangle_2 = self.to_json(large_triangle_2)
    self.medium_triangle = self.to_json(medium_triangle)
    self.small_triangle_1 = self.to_json(small_triangle_1)
    self.small_triangle_2 = self.to_json(small_triangle_2)
    self.square = self.to_json(square)
    self.parallelogram = self.to_json(parallelogram)
  end

  def self.find_new_puzzle(past_puzzles = [])
    if past_puzzles.empty?
      puzzle = Puzzle.all.sample
    elsif 
      puzzle_ids = []
      Puzzle.all.each do |puzz|
        puzzle_ids << puzz.id.to_s
      end
      valid_puzzles = puzzle_ids - past_puzzles
      puzzles = Puzzle.where(id: valid_puzzles)
      if puzzles.empty?
        puzzle = Puzzle.all.sample
      else
        puzzle = puzzles.sample
      end
    end
  end
end
