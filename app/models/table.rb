class Table < ActiveRecord::Base

  has_many :tiles, dependent: :destroy
end
