class CreateProductOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :product_orders do |t|
      t.integer :order_id, null: false
      t.integer :product_id, null: false
      t.integer :shop_id, null: false

      t.timestamps
    end
    add_index :product_orders, :order_id
    add_index :product_orders, :product_id
    add_index :product_orders, :shop_id
  end
end
