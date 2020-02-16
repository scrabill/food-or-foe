class CreateEmojis < ActiveRecord::Migration[6.0]
  def change
    create_table :emojis do |t|
      t.string :slug
      t.string :character
      t.string :unicodeName
      t.string :codePoint
      t.string :group
      t.string :subGroup
      t.timestamps
    end
  end
end
