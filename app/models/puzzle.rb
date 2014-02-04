class Puzzle < ActiveRecord::Base
  attr_accessible :large_triangle_1, :large_triangle_2, :medium_triangle, :name, :parallelogram, :small_triangle_1, :small_triangle_2, :square
end
