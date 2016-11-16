require 'spec_helper'

feature 'Say Hello', :js do
  scenario 'test that the link actually says hello' do
    Given 'I\'m on the welcome page'
    When 'I click Say Hello'
    Then 'I see Hello!'
  end

  def im_on_the_welcome_page
    visit '/'
    expect(page).to have_selector 'h1', text: 'Welcome'
  end

  def i_click_say_hello
    expect(page).to have_selector 'a', text: 'Say Hello'
    page.find('a', text: 'Say Hello').click
  end

  def i_see_hello
    within 'div h2' do
      expect(page).to have_content 'Hello!'
    end
  end
end
