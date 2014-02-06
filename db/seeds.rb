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
  :small_triangle_1 => 	"x:815, y:97,  r:0, color:black",
  :small_triangle_2 => 	"x:498, y:326, r:270, color:black",
  :square => 			"x:875, y:186, r:0, color:black",
  :parallelogram => 	"x:817, y:345, r:135, color:black, flip:false"
  )

Puzzle.create(
  :name => "swan",
  :large_triangle_1 => 	"x:809, y:339, r:180, color:black",
  :large_triangle_2 => 	"x:731, y:405, r:225, color:black",
  :medium_triangle => 	"x:647, y:363, r:45, color:black",
  :small_triangle_1 => 	"x:643, y:130, r:135, color:black",
  :small_triangle_2 => 	"x:634, y:304, r:90, color:black",
  :square => 			"x:664, y:245, r:0, color:black",
  :parallelogram => 	"x:694, y:156, r:0, color:black, flip:false"
  )

Puzzle.create(
  :name => "duck",
  :large_triangle_1 =>  "x:632, y:315, r:180, color:black",
  :large_triangle_2 =>  "x:751, y:315, r:0, color:black",
  :small_triangle_1 =>  "x:909, y:252, r:45, color:black",
  :small_triangle_2 =>  "x:770, y:436, r:225, color:black",
  :medium_triangle =>   "x:846, y:105, r:135, color:black",
  :square =>      "x:870, y:315, r:0, color:black",
  :parallelogram =>   "x:846, y:189, r:135, color:black, flip:false"
  )

Puzzle.create(
  :name => "horse",
  :large_triangle_1 =>  "x:727, y:233, r:45, color:black",
  :large_triangle_2 =>  "x:828, y:308, r:90, color:black",
  :small_triangle_1 =>  "x:600, y:220, r:0, color:black",
  :small_triangle_2 =>  "x:748, y:423, r:135, color:black",
  :medium_triangle =>   "x:684, y:65, r:135, color:black",
  :square =>      "x:726, y:149, r:45, color:black",
  :parallelogram =>   "x:918, y:397, r:0, color:black, flip:false"
  )

Puzzle.create(
  :name => "giraffe",
  :large_triangle_1 =>  "x:750, y:376, r:270, color:black",
  :large_triangle_2 =>  "x:631, y:378, r:270, color:black",
  :small_triangle_1 =>  "x:780, y:81, r:270, color:black",
  :small_triangle_2 =>  "x:721, y:318, r:90, color:black",
  :medium_triangle =>   "x:840, y:92, r:0, color:black",
  :square =>      "x:750, y:259, r:0, color:black",
  :parallelogram =>   "x:780, y:170, r:0, color:black, flip:false"
  )
