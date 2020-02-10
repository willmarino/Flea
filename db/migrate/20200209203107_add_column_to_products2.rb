class AddColumnToProducts2 < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :order_details, :string, array: true, default: []
  end
end
