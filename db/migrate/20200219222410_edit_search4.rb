class EditSearch4 < ActiveRecord::Migration[5.2]
  def change
    remove_column :searches, :quantity
    add_column :searches, :quantity, :integer, default: 0
  end
end
