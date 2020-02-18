class ChangeOrders2 < ActiveRecord::Migration[5.2]
  def change
    remove_column :orders, :delivered
    add_column :orders, :product_id, :integer, null: false
  end
end
