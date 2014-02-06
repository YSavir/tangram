class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  # Setup accessible (or protected) attributes for your model
  attr_accessible :email, :password, :password_confirmation, :remember_me
  # attr_accessible :title, :body

  attr_accessible :user_name

  has_many :saveds

  def find_saves
    saves_hash = {}
    saves = Saved.where(user_id: self.id)
    saves.each do |save_game|
      saves_hash["#{save_game.id}"] = []
      saves_hash["#{save_game.id}"] << save_game.puzzle.name
      saves_hash["#{save_game.id}"] << save_game.created_at
      saves_hash["#{save_game.id}"] << save_game
    end
    return saves_hash
  end
end
