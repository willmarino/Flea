class EditOrders < ActiveRecord::Migration[5.2]
  def change
    add_column :product_orders, :chosen_options, :string, array: true, default: []
    remove_column :orders, :product_ids
  end
end
