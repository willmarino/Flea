class RemoveColumnFromProducts < ActiveRecord::Migration[5.2]
  def change
    remove_column :products, :order_details
    add_column :products, :options_details, :string, array: true, default: []
  end
end
