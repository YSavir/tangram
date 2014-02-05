class CreateSaveds < ActiveRecord::Migration
  def change
    create_table :saveds do |t|
      t.integer :puzzle_id
      t.integer :user_id
      t.string :large_triangle_1
      t.string :large_triangle_2
      t.string :medium_triangle
      t.string :small_triangle_1
      t.string :small_triangle_2
      t.string :square
      t.string :parallelogram

      t.timestamps
    end
  end
end
