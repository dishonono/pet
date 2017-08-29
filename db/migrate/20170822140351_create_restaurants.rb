class CreateRestaurants < ActiveRecord::Migration[5.1]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.belongs_to :genre, foreign_key: true
      t.integer :rating
      t.boolean :ten_bis
      t.integer :max_delivey_time
      t.string :address
      t.string :geo

      t.timestamps
    end
  end
end
