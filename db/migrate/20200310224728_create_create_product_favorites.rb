class CreateCreateProductFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :product_favorites do |t|
      t.integer :user_id, null: false
      t.integer :product_id, null: false
      t.timestamps
    end
    add_index :product_favorites, :user_id
    add_index :product_favorites, :product_id
  end
end
