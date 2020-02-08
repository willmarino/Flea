class AddColumnToProducts < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :photoURL, :string
  end
end
