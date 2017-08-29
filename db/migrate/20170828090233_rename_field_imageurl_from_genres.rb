class RenameFieldImageurlFromGenres < ActiveRecord::Migration[5.1]
  def change
    rename_column :genres, :image_url, :icon
  end
end
