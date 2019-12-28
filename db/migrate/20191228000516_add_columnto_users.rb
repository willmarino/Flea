class AddColumntoUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :viewed, :string, array: true, default: []
  end
end
