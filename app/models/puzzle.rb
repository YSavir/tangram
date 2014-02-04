class Puzzle < ActiveRecord::Base
  attr_accessible :large_triangle_1, :large_triangle_2, :medium_triangle, :name, :parallelogram, :small_triangle_1, :small_triangle_2, :square

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
