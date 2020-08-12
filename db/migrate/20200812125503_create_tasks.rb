class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :avatar, default: "https://random-files.nyc3.digitaloceanspaces.com/user.svg", null: false
      t.text :description, null: false
      t.datetime :completed_at

      t.timestamps
    end
  end
end
