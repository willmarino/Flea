class AddItemsToCarts < ActiveRecord::Migration[5.2]
  def change
    add_column :carts, :products, :string, array: true, default: []
  end
end
