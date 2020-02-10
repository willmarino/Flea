class CreateTableTags < ActiveRecord::Migration[5.2]
  def change
    create_table :tags do |t|
      t.integer :tagging_id, null: false
      t.string :tag_name, null: false

      t.timestamps
    end
    add_index :tags, :tagging_id
  end
end
