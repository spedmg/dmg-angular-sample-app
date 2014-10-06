ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)

require 'capybara/poltergeist'
require 'capybara/rails'
require 'capybara/rspec'
require 'simple_bdd/rspec'

Capybara.register_driver :poltergeist do |app|
  Capybara::Poltergeist::Driver.new app
end

Capybara.javascript_driver = :poltergeist

