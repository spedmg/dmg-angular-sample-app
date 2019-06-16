require 'spec_helper.rb'
include Capybara::DSL

describe "user/index.html.erb" do
	before(:each) do
		visit '/'
	end

	it "renders the header" do
		expect(page).to have_content('DMG TEST APP')
	end

	it "renders a search bar in the header" do
		expect(page).find_by_id('search')
	end

	it "displays the title" do
		expect(page).to have_content('Github Directory')
	end

	it "renders a container div with specific text" do
		section = find(:css, '#container')
		expect(section).to have_text('Popular Repositories')
		expect(section).to have_text('Bio')
		expect(section).to have_text('Joined')
	end

	it "displays a button with id 'btn'" do
		expect(page).find(:css, '#btn')
	end

end
