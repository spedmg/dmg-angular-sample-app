require 'spec_helper.rb'

describe UserController do
	describe "GET user#index" do
		include Capybara::DSL
		it "successfully loads root/index" do
			visit '/'
			expect(page.status_code).to be(200)
		end
	end
end
