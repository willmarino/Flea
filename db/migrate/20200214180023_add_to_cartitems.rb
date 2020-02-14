class AddToCartitems < ActiveRecord::Migration[5.2]
  def change
    add_column :cart_items, :chosen_options, :string, array: true, default: []
  end
end
