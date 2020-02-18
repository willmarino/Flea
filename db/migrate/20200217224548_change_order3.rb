class ChangeOrder3 < ActiveRecord::Migration[5.2]
  def change
    remove_column :orders, :product_id
    add_column :orders, :product_ids, :string, array: true, default: []
  end
end
