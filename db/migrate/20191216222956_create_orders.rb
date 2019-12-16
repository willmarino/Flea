class CreateOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :orders do |t|
      t.integer :user_id, null: false
      t.integer :cart_id, null: false
      t.boolean :delivered, default: false

      t.timestamps
    end
    add_index :orders, :user_id
    add_index :orders, :cart_id
  end
end
