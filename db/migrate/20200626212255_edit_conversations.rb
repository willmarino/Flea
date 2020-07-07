class EditConversations < ActiveRecord::Migration[5.2]
  def change
    add_column :conversations, :messages, :string, array: true, default: []
  end
end
