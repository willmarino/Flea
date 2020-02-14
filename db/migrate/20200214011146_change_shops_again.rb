class ChangeShopsAgain < ActiveRecord::Migration[5.2]
  def change
    add_column :shops, :photoURL, :string
  end
end
