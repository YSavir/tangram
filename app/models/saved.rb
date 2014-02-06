class Saved < ActiveRecord::Base
  attr_accessible :large_triangle_1, :large_triangle_2, :medium_triangle, :parallelogram, :puzzle_id, :small_triangle_1, :small_triangle_2, :square, :user_id

  belongs_to :user
  belongs_to :puzzle

  def self.save_puzzle(parameters, user_id)
    puzzle_to_save = {}
    parameters[:save].each do |piece, piece_info|
      puzzle_to_save[piece] = {}
      piece_strings_array = []
      piece_info.each do |key, value|
        piece_strings_array << "#{key}:#{value}"
      end
      piece_string = piece_strings_array.join(", ")
      piece_string = piece_string.gsub("rotation", "r")
      puzzle_to_save[piece] = piece_string
    end
    Saved.create(:puzzle_id => parameters["puzzle_id"], :user_id => user_id, :large_triangle_1 => puzzle_to_save["large_triangle_1"], :large_triangle_2 => puzzle_to_save["large_triangle_2"], :medium_triangle => puzzle_to_save["medium_triangle"], :small_triangle_1 => puzzle_to_save["small_triangle_1"], :small_triangle_2 => puzzle_to_save["small_triangle_2"], :square => puzzle_to_save["square"], :parallelogram => puzzle_to_save["parallelogram"])
  end

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

end
