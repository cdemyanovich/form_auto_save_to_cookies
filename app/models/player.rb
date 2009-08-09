class Player < ActiveRecord::Base
  validates_presence_of :first_name, :last_name
  validates_numericality_of :jersey_number, :only_integer => true, :greater_than_or_equal_to => 1
end
