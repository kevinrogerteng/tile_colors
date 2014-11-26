class CreateTiles < ActiveRecord::Migration
  def change
    create_table :tiles do |t|
      t.string :color
      # t.integer :table_id

      t.timestamps
    end
  end
end
