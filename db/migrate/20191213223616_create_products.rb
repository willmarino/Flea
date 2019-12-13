class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.integer :shop_id, null: false
      t.text :description
      t.string :high_level_category, null: false
      t.string :mid_level_category
      t.string :low_level_category
      t.integer :price, null: false
      t.integer :stock_amt, null: false

      t.timestamps
    end
    add_index :products, :name
  end
end
