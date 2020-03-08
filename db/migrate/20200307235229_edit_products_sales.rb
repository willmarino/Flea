class EditProductsSales < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :sale, :float
  end
end
