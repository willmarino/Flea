class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.text :body, null: false
      t.integer :conversation_id, null: false
      t.integer :sender_id, null: false
      t.timestamps
    end
    add_index :messages, :conversation_id
  end
end
