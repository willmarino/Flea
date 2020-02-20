class EditSearch < ActiveRecord::Migration[5.2]
  def change
    add_column :searches, :quantity, :integer
  end
end
