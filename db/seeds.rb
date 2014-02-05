# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Puzzle.destroy_all

Puzzle.create(
  :name => "cat",
  :large_triangle_1 => "x:755, y:426, r:135, color:black",
  :large_triangle_2 => "x:738, y:299, r:90, color:black",
  :medium_triangle => "x:636, y:264, r:45, color:black",
  :small_triangle_1 => "x:615, y:95, r:90, color:black",
  :small_triangle_2 => "x:674, y:95, r:270, color:black",
  :square => "x:644, y:154, r:0, color:black",
  :parallelogram => "x:887, y:439, r:90, color:black, flip:false"
  )

Puzzle.create(
  :name => "dog",
  :large_triangle_1 => 	"x:697, y:243, r:180, color:black",
  :large_triangle_2 => 	"x:570, y:260, r:225, color:black",
  :medium_triangle => 	"x:786, y:273, r:270, color:black",
  :small_triangle_1 => 	"x:815, y:97 , r:0, color:black",
  :small_triangle_2 => 	"x:498, y:326, r:270, color:black",
  :square => 			"x:875, y:186, r:0, color:black",
  :parallelogram => 	"x:817, y:345, r:135, color:black, flip:false"
  )