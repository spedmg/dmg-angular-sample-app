ENV['RAILS_ENV'] ||= 'test'
require File.expand_path('../../config/environment', __FILE__)

require 'capybara/rails'
require 'capybara/rspec'
require 'simple_bdd'

RSpec.configure do |config|
    config.include SimpleBdd
end

module CapybaraHelper

  def self.set_driver(driver)
    Capybara.javascript_driver = driver
    Capybara.default_driver    = driver
  end
end

Capybara.register_driver :chrome do |app|
  Capybara::Selenium::Driver.new(app, :browser => :chrome)
end

Capybara.register_driver :headless_chrome do |app|
  caps = Selenium::WebDriver::Remote::Capabilities.chrome(loggingPrefs: { browser: 'ALL' })
  opts = Selenium::WebDriver::Chrome::Options.new

  chrome_args = %w[--headless --window-size=1920,1080 --no-sandbox --disable-dev-shm-usage]
  chrome_args.each { |arg| opts.add_argument(arg) }
  Capybara::Selenium::Driver.new(app, browser: :chrome, options: opts, desired_capabilities: caps)
end

Capybara.configure do |config|
  # change this to :chrome to observe tests in a real browser
  config.javascript_driver = :headless_chrome
  #config.javascript_driver = :chrome
end
