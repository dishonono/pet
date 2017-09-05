class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.string :name
      t.string :text
      t.belongs_to :restaurant, foreign_key: true
      t.integer :rating

      t.timestamps
    end

    remove_column :restaurants, :rating, :integer
  end
end
