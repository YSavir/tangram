class CreatePuzzles < ActiveRecord::Migration
  def change
    create_table :puzzles do |t|
      t.string :name
      t.string :large_triangle_1
      t.string :large_triangle_2
      t.string :parallelogram
      t.string :medium_triangle
      t.string :small_triangle_1
      t.string :small_triangle_2
      t.string :square

      t.timestamps
    end
  end
end
