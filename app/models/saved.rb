class Saved < ActiveRecord::Base
  attr_accessible :large_triangle_1, :large_triangle_2, :medium_triangle, :parallelogram, :puzzle_id, :small_triangle_1, :small_triangle_2, :square, :user_id

  belongs_to :user
  belongs_to :puzzle
end
