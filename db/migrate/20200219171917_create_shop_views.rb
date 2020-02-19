class CreateShopViews < ActiveRecord::Migration[5.2]
  def change
    create_table :shop_views do |t|
      t.integer :user_id, null: false
      t.integer :shop_id, null: false

      t.timestamps
    end
    add_index :shop_views, :user_id
    add_index :shop_views, :shop_id
  end
end
