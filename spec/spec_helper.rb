ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)

require 'capybara/rails'
require 'capybara/rspec'
require 'simple_bdd/rspec'


module CapybaraHelper

  def self.set_driver(driver)
    Capybara.javascript_driver = driver
    Capybara.default_driver    = driver
  end
end

Capybara.register_driver :chrome do |app|
  Capybara::Selenium::Driver.new(app, :browser => :chrome)
end

Capybara.register_driver :selenium do |app|
  ff_path = ENV['FIREFOX_PATH']
  Selenium::WebDriver::Firefox::Binary.path = ff_path if ff_path
  Capybara::Selenium::Driver.new(app, :browser => :firefox)
end

CapybaraHelper.set_driver :webkit

Capybara::Webkit.configure do |config|
  config.ignore_ssl_errors
  config.block_unknown_urls
  config.skip_image_loading
end

RSpec.configure do |config|
  config.before(selenium: true) do
    puts "selenium"
    CapybaraHelper.set_driver :selenium
  end

  config.before(chrome: true) do
    puts "chrome"
    CapybaraHelper.set_driver :chrome
  end
end

